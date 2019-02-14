import { Component, OnInit, ViewChild } from '@angular/core';
import { Album } from '../../shared/models/models';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { environment } from 'src/environments/environment.prod';
import { ITEM_PER_PAGE } from 'src/app/shared/models/const';
import { IonInfiniteScroll } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ListDetailModalComponent } from './components/list-detail-modal/list-detail-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html'
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public currentPage: number = 0;
  public allAlbums: Album[] = [];
  public loadedAlbums: Album[] = [];

  constructor(
    public modalController: ModalController,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    // Get mock data list from API
    this.httpService.get(environment.API_URL).subscribe((albums: Album[]) => {
      this.allAlbums = albums;

      this.loadedAlbums = this.allAlbums.slice(0, ITEM_PER_PAGE);
      this.currentPage = 1;
    });
  }

  onScroll(event) {
    this.getNextPage(event);
  }

  getNextPage(event: any) {
    // Mock data load on client side
    setTimeout(() => {
      const startIndex: number = this.currentPage * ITEM_PER_PAGE;
      const endIndex: number = startIndex + ITEM_PER_PAGE;

      this.loadedAlbums = [
        ...this.loadedAlbums,
        ...this.allAlbums.slice(startIndex, endIndex > this.allAlbums.length ? this.allAlbums.length : endIndex)
      ];

      if (this.loadedAlbums.length === this.allAlbums.length) {
        this.infiniteScroll.disabled = true;
      }
      this.infiniteScroll.complete();
      this.currentPage++;
    }, 1500);
  }

  async presentModal(album: Album) {
    const modal = await this.modalController.create({
      component: ListDetailModalComponent,
      componentProps: { data: album }
    });
    return await modal.present();
  }
}
