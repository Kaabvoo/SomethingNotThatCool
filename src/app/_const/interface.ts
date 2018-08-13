namespace Body_Msg{
    export interface Items{
        message: Message,
        recieved: Recived
    }

    export interface Message{
        clientId: string,
        sortList: Array<object>,
        pageNumber: number,
        pageSize: number
    }

    export interface Recived{
        message: String
    }

    export const InitialRecieved = {
        message: "Loading..."
    }

    export const InitialMessage = {
        clientId: "M34",
        sortList: [
            {"sortColumn": "employeeName", "sortOrder": "ASC"}
        ],
        pageNumber: 0,
        pageSize: 25
    }
}