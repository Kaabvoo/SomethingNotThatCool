namespace Body_Msg{
    export interface Items{
        message: Message,
        recieved: Recived,
        client: ClientsInfo
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

    export interface ClientsInfo{
        employee: {
            firstName: String,
            lastName: String,
            fullName: String,
            employeeId: Number
        },
        policyId: Number,
        leaveType: String,
        payments: [{date: string, amount: number}]
    }

    export const ClientsInfoInitialState: ClientsInfo = {
        employee: {
            firstName: "String",
            lastName: "String",
            fullName: "String",
            employeeId: 12345
        },
        policyId: 12345,
        leaveType: "String",
        payments: [{date: "string", amount: 500}]
    }

    export const InitialRecieved: Recived = {
        message: "Loading..."
    }

    export const InitialMessage: Message = {
        clientId: "M34",
        sortList: [
            {"sortColumn": "employeeName", "sortOrder": "ASC"}
        ],
        pageNumber: 0,
        pageSize: 25
    }
}