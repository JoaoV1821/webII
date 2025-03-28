
const weekDay = (dia: number) => {
    enum days {
     
        DOMINGO = 0,
        SEGUNDA = 1,
        TERCA = 2,
        QUARTA = 3,
        QUINTA = 4,
        SEXTA = 5,
        SABADO = 6
    
    }
    
    return days[dia];
}

function calcularMedia(...notas: number[]): number {
    if (notas.length === 0) {
        throw new Error("É necessário informar pelo menos uma nota.");
    }

    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}


const media = calcularMedia(8, 7.5, 9);
const day = weekDay(1)
console.log(`A média das notas é: ${media.toFixed(2)}`);
console.log(dia);


