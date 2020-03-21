class Clientes {
	private clientes: Array<Cliente>;

	constructor() {
		this.clientes = new Array<Cliente>();
		const c1 = new Conta('1', 100);
    const c2 = new Conta('2', 200);
		const cliente1 = new Cliente("Danilo","12345678909", c1);
		const cliente2 = new Cliente("Messi","98765432101", c2);
		this.clientes.push(cliente1);
		this.clientes.push(cliente2);
	}

	inserir(cliente: Cliente): void {
		this.clientes.push(cliente);
	}

	remover(cpf: string): void {
		const cliente = this.findClienteByCpf(cpf);
		const i = this.clientes.indexOf(cliente);
		if (i >= -1) {
			this.clientes.splice(i, 1);
		}
	}

	listar(): Array<Cliente> {
		return this.clientes;
	}

	pesquisar(cpf: string): Cliente {
		return this.findClienteByCpf(cpf);
	}

	private findClienteByCpf(cpf: string): Cliente {
		const cliente = this.clientes.find(cliente => cliente.cpf === cpf);

		return cliente;
	}
}
