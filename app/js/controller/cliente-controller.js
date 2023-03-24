class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector('#nome');
        this.inputCPF =
            document.querySelector('#CPF');
        this.inputNumeroConta =
            document.querySelector('#numeroConta');
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCPF.value, c1);
    }
}
