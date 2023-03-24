class Clientes {
    constructor() {
        this._clientes = [];
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const indexRemocao = this._clientes.findIndex(cliente => cpf === cliente.cpf);
        console.log("indexRemocao", indexRemocao);
        this._clientes.splice(indexRemocao, 1);
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        const objCliente = this._clientes.filter(cliente => cpf === cliente.cpf);
        if (objCliente.length > 0)
            return objCliente[0];
        else
            return undefined;
    }
}
