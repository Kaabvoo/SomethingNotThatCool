import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as A from "../_ngrx/accion";

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {

  constructor( private store: Store<Body_Msg.Items> ) { }

  clientInfo$ = this.store.select(cli => cli.client)

  ngOnInit() {
  }

  getPearson(){
    this.store.dispatch( new A.askForClient({message: "Asking the backend for some Data...."}) )
  }

}
