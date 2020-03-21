class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = new Array();
    }
    addDependente(dependente) {
        this.dependentes.push(dependente);
    }
    removeDependente(cpf) {
        //TODO: implementar
        throw new Error("To be implemented");
    }
}
