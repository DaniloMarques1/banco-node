class Clientes {
    constructor() {
        this.clientes = new Array();
        const c1 = new Conta('1', 100);
        const c2 = new Conta('2', 200);
        const cliente1 = new Cliente("Danilo", "12345678909", c1);
        const cliente2 = new Cliente("Messi", "98765432101", c2);
        this.clientes.push(cliente1);
        this.clientes.push(cliente2);
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const cliente = this.findClienteByCpf(cpf);
        const i = this.clientes.indexOf(cliente);
        if (i >= -1) {
            this.clientes.splice(i, 1);
        }
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.findClienteByCpf(cpf);
    }
    findClienteByCpf(cpf) {
        const cliente = this.clientes.find(cliente => cliente.cpf === cpf);
        return cliente;
    }
}
