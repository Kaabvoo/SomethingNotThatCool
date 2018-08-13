import * as A from './accion'

export function clientReductor( state: Body_Msg.Items, action: A.Client ){
    switch(action.type){
        case A.ClientActions.GENERATE_NEW_CLIENT:
            return { ...state, clientId:action.payload.clientId,sortList:action.payload.sortList,pageNumber:action.payload.pageNumber,pageSize:action.payload.pageSize}
        case A.ClientActions.SEND_REQUEST_BACKEND:
            return { ...state, message: action.payload.message}
        case A.ClientActions.SET_NEW_LIST:
            return { ...state, sortList: action.payload}
    }
}