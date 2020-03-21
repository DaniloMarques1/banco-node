class Clintes {
    constructor() {
        this.clintes = new Array();
        const c1 = new Conta('1', 100);
        const c2 = new Conta('2', 200);
        const cliente1 = new Cliente("Danilo", "12345678909", c1);
        const cliente2 = new Cliente("Messi", "98765432101", c2);
        this.clintes.push(cliente1);
        this.clintes.push(cliente2);
    }
    inserir(cliente) {
        this.clintes.push(cliente);
    }
    remover(cpf) {
        const cliente = this.findClienteByCpf(cpf);
        const i = this.clintes.indexOf(cliente);
        if (i >= -1) {
            this.clintes.splice(i, 1);
        }
    }
    listar() {
        return this.clintes;
    }
    pesquisar(cpf) {
        return this.findClienteByCpf(cpf);
    }
    findClienteByCpf(cpf) {
        const cliente = this.clintes.find(cliente => cliente.cpf === cpf);
        return cliente;
    }
}
