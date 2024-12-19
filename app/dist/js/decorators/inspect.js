export function inspect() {
    return function (target, porpetyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Metodo ${porpetyKey}`);
            console.log(`------ paramentros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------ retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
