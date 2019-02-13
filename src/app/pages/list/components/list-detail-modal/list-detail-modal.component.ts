import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Album } from 'src/app/shared/models/models';

@Component({
  selector: 'app-list-detail-modal',
  templateUrl: './list-detail-modal.component.html'
})
export class ListDetailModalComponent {
  album: Album;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}

  navigateBack() {
    this.modalController.dismiss(null);
  }

  ionViewWillEnter() {
    this.album = this.navParams.get('data');
  }
}
