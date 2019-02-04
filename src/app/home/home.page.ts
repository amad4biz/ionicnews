import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Article } from '../detail/detail.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

news: any;
article: Article;

constructor(private service: ApiService, private router: Router){

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



goToDetail(item: Article){

  this.article = item
  this.router.navigate(['/detail', item.id])
}


}
