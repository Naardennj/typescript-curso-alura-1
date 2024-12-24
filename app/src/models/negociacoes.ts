import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
    private negocicoes: Negociacao[] = [];

    public adiciona(neogicicao: Negociacao) {
        this.negocicoes.push(neogicicao);
    };

    public lista(): readonly Negociacao[] {
        return this.negocicoes;
    }
    public paraTexto(): string {
        return JSON.stringify(this.negocicoes, null, 2)
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negocicoes) === JSON.stringify(negociacoes.lista());
    }
};
