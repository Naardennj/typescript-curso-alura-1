import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negocicoes: Negociacao[] = [];

    adiciona(neogicicao: Negociacao) {
        this.negocicoes.push(neogicicao);
    };

    lista(): readonly Negociacao[] {
        return this.negocicoes;
    };
};
