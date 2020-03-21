class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.inputSaldo = document.querySelector("#saldo");
        this.inputNumeroConta = document.querySelector("#conta");
        this.clientes = new Clientes();
    }
    inserir(e) {
        e.preventDefault();
        const nome = this.inputNome.value;
        const cpf = this.inputCpf.value;
        const numeroConta = this.inputNumeroConta.value;
        const saldo = Number(this.inputSaldo.value);
        const conta = new Conta(numeroConta, saldo);
        const cliente = new Cliente(nome, cpf, conta);
        this.clientes.inserir(cliente);
        console.log("opa");
        this.inserirClienteNoHTML(cliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const table = document.querySelector("#table-body");
        const tableRow = document.createElement("tr");
        const nameP = document.createElement('td');
        const cpfP = document.createElement('td');
        nameP.textContent = cliente.nome;
        cpfP.textContent = cliente.cpf;
        tableRow.appendChild(nameP);
        tableRow.appendChild(cpfP);
        table.appendChild(tableRow);
    }
}
