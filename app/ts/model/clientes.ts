class Clientes {
    private _clientes: Cliente[];
    
    constructor(){
        this._clientes = [];
    }

    inserir(cliente: Cliente){
        this._clientes.push(cliente);
    }

    remover(cpf: string){
        const indexRemocao = this._clientes.findIndex(cliente => cpf === cliente.cpf);
        console.log("indexRemocao", indexRemocao)
        this._clientes.splice(indexRemocao, 1);
    }

    listar(): Cliente[]{
        return this._clientes;
    }

    pesquisar(cpf: string): Cliente{
        const objCliente = this._clientes.filter(cliente => cpf === cliente.cpf);
        
        if (objCliente.length > 0) return objCliente[0];
        else return undefined;
    }

}