import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negocicoes: Array<Negociacao> = [];

    adiciona(neogicicao: Negociacao) {
        this.negocicoes.push(neogicicao);
    };

    lista(): ReadonlyArray<Negociacao> {
        return this.negocicoes;
    };
};
