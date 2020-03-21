class ClienteController {
	private inputNome: HTMLInputElement;
	private inputCpf: HTMLInputElement;
	private inputNumeroConta: HTMLInputElement;
	private inputSaldo: HTMLInputElement;

	private clientes: Clientes;
	
	constructor() {
		this.inputNome = <HTMLInputElement>document.querySelector("#nome");
		this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
		this.inputSaldo = <HTMLInputElement>document.querySelector("#saldo");
		this.inputNumeroConta = <HTMLInputElement>document.querySelector("#conta");
		this.clientes = new Clientes();
	}
	
	inserir(e: Event): void {
		e.preventDefault();
		const nome = this.inputNome.value;
		const cpf = this.inputCpf.value;
		const numeroConta = this.inputNumeroConta.value;
		const saldo = Number(this.inputSaldo.value);
		const conta = new Conta(numeroConta, saldo);
		const cliente = new Cliente(nome, cpf, conta);

		this.clientes.inserir(cliente);
		this.inserirClienteNoHTML(cliente);
	}

	listar(): void {
		this.clientes.listar().forEach(cliente => {
			this.inserirClienteNoHTML(cliente);	
		})
	}

	private inserirClienteNoHTML(cliente: Cliente): void {
		const table = <HTMLTableElement>document.querySelector("#table-body");
		const tableRow = document.createElement("tr");
		const nameP = document.createElement('td');
		const cpfP  = document.createElement('td');

		nameP.textContent = cliente.nome;
		cpfP.textContent = cliente.cpf;

		tableRow.appendChild(nameP);
		tableRow.appendChild(cpfP);

		table.appendChild(tableRow);
	}
}
