class Clintes {
	private clintes: Array<Cliente>;

	constructor() {
		this.clintes = new Array<Cliente>();
		const c1 = new Conta('1', 100);
    const c2 = new Conta('2', 200);
		const cliente1 = new Cliente("Danilo","12345678909", c1);
		const cliente2 = new Cliente("Messi","98765432101", c2);
		this.clintes.push(cliente1);
		this.clintes.push(cliente2);
	}

	inserir(cliente: Cliente): void {
		this.clintes.push(cliente);
	}

	remover(cpf: string): void {
		const cliente = this.findClienteByCpf(cpf);
		const i = this.clintes.indexOf(cliente);
		if (i >= -1) {
			this.clintes.splice(i, 1);
		}
	}

	listar(): Array<Cliente> {
		return this.clintes;
	}

	pesquisar(cpf: string): Cliente {
		return this.findClienteByCpf(cpf);
	}

	private findClienteByCpf(cpf: string): Cliente {
		const cliente = this.clintes.find(cliente => cliente.cpf === cpf);

		return cliente;
	}
}
