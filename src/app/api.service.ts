import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { tap, map } from 'rxjs/operators';
import { Article } from './detail/detail.page';




@Injectable({
  providedIn: 'root'
})


export class ApiService {
 
  dataUrl = "https://www.reddit.com/r";
  //localUrl = "http://jsonplaceholder.typicode.com/posts/";

  localUrl = "http://localhost:3000/news/";

  bookUrl = "http://localhost:5001/api/books"

  articles: any[]

  constructor(private http: HttpClient) { }


  // getNews(category, limit){

  //   //return this.http.get(this.localUrl + '/' +category+ '/top.json?limit='+limit);

  //   return this.http.get(this.localUrl);
  // }



//  getOne(id: number){

//   return this.http.get<Article[]>(this.localUrl);
//  }

  getNews(): Observable<Article[]>{

    //return this.http.get(this.localUrl + '/' +category+ '/top.json?limit='+limit);

    return this.http.get<Article[]>(this.localUrl);
  }


  postBook(book){

     return this.http.post(this.bookUrl, book);

  }
  getSingle(id: number){

    return this.getOne(id)
     
  }
  


  getOne(id): Observable<any> {
    return this.http.get(this.localUrl + id).pipe(
      map(this.extractData));
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


}
