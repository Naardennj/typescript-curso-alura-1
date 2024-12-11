export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        const templete = this.template(model);
        this.elemento.innerHTML = templete;
    }

    abstract template(model: T): string;
}
