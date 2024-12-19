export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, porpetyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${porpetyKey}, tempo de execução: ${(t2 - t1) / 1000} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
;
