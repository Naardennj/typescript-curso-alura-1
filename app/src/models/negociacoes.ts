import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negocicoes: Negociacao[] = [];

    public adiciona(neogicicao: Negociacao) {
        this.negocicoes.push(neogicicao);
    };

    public lista(): readonly Negociacao[] {
        return this.negocicoes;
    };
};
