let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);


// const clientes = new Clientes();

// const cliente1 = new Cliente('Gabriel Manassés', '1234567890', c1);
// const cliente2 = new Cliente('Gustavo Wagner', '0987654321', p1);
// console.log('conta1: ', cliente1);
// console.log('conta2: ', cliente2);

// clientes.inserir(cliente1);
// console.log("listar1: ", clientes.listar());

// clientes.inserir(cliente2);
// console.log("listar2: ", clientes.listar());

// clientes.remover("1234567890");
// console.log("remover1: ", clientes.listar());