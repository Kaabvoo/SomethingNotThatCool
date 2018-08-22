import * as A from './accion'

export const combineReducers = {
    message: MessageReducer,
    reciebed: reciebedReducer,
    client: clientReducer
}

export function MessageReducer( state: Body_Msg.Message, action: A.MessageAction ){
    switch(action.type){
        case A.ClientActions.GENERATE_NEW_CLIENT:
            return { ...state, client: action.payload }
        default:
            return state;
    }
}

export function reciebedReducer( state: Body_Msg.Recived, action: A.ReciebedActions ){
    switch(action.type){
        case A.ClientActions.ASK_CLIENT:
            return { ...state, message: action.payload.message}
        case A.ClientActions.SEND_REQUEST_BACKEND:
            return { ...state, message: action.payload.message}
        default:
            return state;
    }
}

export function clientReducer( state: Body_Msg.ClientsInfo, action: A.ClientAction ){
    switch(action.type){
        case A.ClientActions.CLIENT_RECIEBED:
            return { ...state, curremptClient: action.payload }
        default:
            return state;
    }
}