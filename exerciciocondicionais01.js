import entradaDados from 'readline-sync';

let dia = entradaDados.questionInt("Informe o dia da semana (de 1 a 7): ")
switch (dia) {
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sábado")
        break
    case 7:
        console.log("Domindo")
        break
    default:
        console.log("Este dia não existe")
        break;
}