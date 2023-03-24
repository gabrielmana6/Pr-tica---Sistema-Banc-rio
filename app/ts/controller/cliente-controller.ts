class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputNumeroConta: HTMLInputElement;

    private clientes: Clientes;

    constructor(){
        this.inputNome =
            <HTMLInputElement>document.querySelector('#nome');
        this.inputCPF = 
            <HTMLInputElement>document.querySelector('#CPF');
        this.inputNumeroConta = 
            <HTMLInputElement>document.querySelector('#numeroConta');
    }

    inserir(evento: Event) {
    evento.preventDefault();

    let novoCliente = new Cliente(this.inputNome.value, this.inputCPF.value, c1);
    }
}