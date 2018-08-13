import { Action } from "@ngrx/store";

export enum ClientActions{
    GENERATE_NEW_CLIENT = "[NEW] NEW_CLIENT",
    SEND_REQUEST_BACKEND = "[SEND] REQUEST_SENT",
    SET_NEW_LIST = "[UPDATE] LIST_UPDATED"
}

export type Client = addClient | sendReq | updateList

export class addClient implements Action{
    readonly type = ClientActions.GENERATE_NEW_CLIENT;
    constructor( public payload: Body_Msg.Message = Body_Msg.InitialMessage ){}
}

export class sendReq implements Action{
    readonly type = ClientActions.SEND_REQUEST_BACKEND;
    constructor( public payload: Body_Msg.Recived = Body_Msg.InitialRecieved ){}
}

export class updateList implements Action{
    readonly type = ClientActions.SET_NEW_LIST;
    constructor( public payload: Array<object> = [{"sortColumn": "employeeName", "sortOrder": "ASC"},{"employeeName": "Juanito"}] ){}
}