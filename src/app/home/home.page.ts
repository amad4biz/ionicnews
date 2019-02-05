import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { Router } from '@angular/router';
import { Article } from '../detail/detail.page';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

news: any;
article: Article;

constructor(private service: ApiService, private router: Router, public modalCtrl: ModalController){

}

ngOnInit(){
  // this.getNews('politics', 5);
  this.getNews()
}

getNews(){

  this.service.getNews().subscribe(response =>{

  //  console.log(response)

    this.news = response

  })
}

async create(){

  const modal = await this.modalCtrl.create({
            
    component: ModalComponent,
    animated: true,
    showBackdrop: true
  });

  return await modal.present();

}



goToDetail(item: Article){

  this.article = item
  this.router.navigate(['/detail', item.id])
}


}
