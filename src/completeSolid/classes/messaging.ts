import { MessagingProtocol } from "./Interface/messaging-protocol";

export class Messaging implements MessagingProtocol{
    sendMessage(msg:string):void{
        console.log("Mensagem enviada: ", msg)
    }
}