export class Negociacoes {
    constructor() {
        this.negocicoes = [];
    }
    adiciona(neogicicao) {
        this.negocicoes.push(neogicicao);
    }
    ;
    lista() {
        return this.negocicoes;
    }
    ;
}
;
