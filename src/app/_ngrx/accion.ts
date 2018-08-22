import { Action } from "@ngrx/store";

export enum ClientActions{
    GENERATE_NEW_CLIENT = "[NEW] NEW_CLIENT",
    SEND_REQUEST_BACKEND = "[SEND] REQUEST_SENT",
    SET_NEW_LIST = "[UPDATE] LIST_UPDATED",
    ASK_CLIENT = "[GET] ASK_FOR_CLIENT",
    CLIENT_RECIEBED = "[RECIEBE] ITEMS_GOT"
}

export type MessageAction = addClient;

export type ReciebedActions = sendReq | askForClient;

export type ClientAction = gotClientInfo;

export class addClient implements Action{
    readonly type = ClientActions.GENERATE_NEW_CLIENT;
    constructor( public payload: Body_Msg.Message = Body_Msg.InitialMessage ){}
}

export class sendReq implements Action{
    readonly type = ClientActions.SEND_REQUEST_BACKEND;
    constructor( public payload: Body_Msg.Recived = Body_Msg.InitialRecieved ){}
}

export class askForClient implements Action{
    readonly type = ClientActions.ASK_CLIENT;
    constructor( public payload: Body_Msg.Recived = {message: "Not A Thing..."} ){}
}

export class gotClientInfo implements Action{
    readonly type = ClientActions.CLIENT_RECIEBED;
    constructor( public payload: Body_Msg.ClientsInfo ){}
}