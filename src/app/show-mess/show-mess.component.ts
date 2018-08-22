import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as A from "../_ngrx/accion";
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-show-mess',
  templateUrl: './show-mess.component.html',
  styleUrls: ['./show-mess.component.css']
})
export class ShowMessComponent implements OnInit {

  constructor( private store: Store<Body_Msg.Items> ) { }

  valor: string;
  result = this.store.select(ch => ch)
  clientInfo$ = this.store.select(cli => cli.client)
  lis: Array<object> = [
    {"sortColumn": "employeeName", "sortOrder": "ASC"},
    {"employeeName": "Juanito"}
  ]

  ngOnInit() {
  }

  sendData(){
    this.store.dispatch( new A.addClient({"clientId": "M34","sortList": this.lis,"pageNumber": 0,"pageSize": 25}));
  }

  addItem(){
    this.lis.push({"employeeName": this.valor})
  }

  removeItem(){
    this.lis.pop()
  }
}
