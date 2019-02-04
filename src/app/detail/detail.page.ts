import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

export class Article {
  id: number;
  title: string;
  body: string;
   url: string;

}


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

   article: Article[]

   information: any = null;
  slideOpts = {
    effect: 'flip'
  };

  items : Article[]
  news: any
  id: number;
  articleID: any;
  title: any;
 
  constructor(private route: ActivatedRoute, private service: ApiService) {
 
   }

  ngOnInit() {

this.service.getSingle(this.route.snapshot.params['id'])
    .subscribe(data => {this.article = data;
       console.log(this.article)
      });
  }

    
  


 
}
