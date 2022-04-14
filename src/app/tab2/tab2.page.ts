import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController,} from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(public modalController: ModalController) { }

  ngOnInit(){

  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
