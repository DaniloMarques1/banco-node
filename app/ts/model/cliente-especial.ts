class ClienteEspecial extends Cliente {
	private dependentes: Array<Cliente>;

	constructor(nome: string, cpf: string, conta: Conta) {
		super(nome, cpf, conta);
		this.dependentes = new Array<Cliente>();
	}

	addDependente(dependente: Cliente) {
		this.dependentes.push(dependente);
	}

	removeDependente(cpf: string) {
		//TODO: implementar
		throw new Error("To be implemented");
	}

}
