import { PersistencyProtocol } from "../classes/Interface/PersistencyProtocol";

export class Persistency implements PersistencyProtocol {
    saveOrder():void{
        console.log('Pedido salvo com sucesso...')
    }
}