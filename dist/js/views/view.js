export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const templete = this.template(model);
        this.elemento.innerHTML = templete;
    }
}
