import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
 form: any;
  constructor(private service: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({

      bookname: [],
      price: [],
      category: []

    })
  }


  addBook(){

    this.service.postBook(this.form.value).subscribe(data => { console.log(data)}, (error) => console.log(error));

  }
}
