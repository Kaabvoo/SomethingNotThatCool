import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { switchMap, mergeMap, mapTo, mergeMapTo, map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import * as A from './accion'

@Injectable()
export class SendInfo{
    constructor( private actions$: Actions, private http: HttpClient ){}

    @Effect()
    sendReq$ = this.actions$.pipe(ofType(A.ClientActions.GENERATE_NEW_CLIENT),
    mergeMap( (action: A.addClient) => this.http.post('http://localhost:8080/getLeaves', action.payload)
        .pipe(
            map(data => (new A.sendReq({message: "Si llego todo..."}))),
            catchError((erro) => of(new A.sendReq({message: erro})))
        )
    ));

    @Effect()
    sendGetReq$ = this.actions$.pipe(ofType(A.ClientActions.ASK_CLIENT),
        mergeMap( (action: A.gotClientInfo) => this.http.get('http://localhost:8080/getLeaves')
        .pipe(
            map((data: Body_Msg.ClientsInfo) => {data.employee.fullName=data.employee.lastName+","+data.employee.firstName; return new A.gotClientInfo(data);})
        )
    ));
};