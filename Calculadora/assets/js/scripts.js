function soma(a,b){
    let result = a+b;
    alert(`${a} + ${b} = ${result}`);
}

function subtracao(a,b){
    let result = a-b;
    alert(`${a} - ${b} = ${result}`);
}

function multiplicacao(a,b){
    let result = a*b;
    alert(`${a} * ${b} = ${result}`);
}

function divisaoReal(a,b){
    let result = a/b;
    alert(`${a} / ${b} = ${result}`);
}

function divisaoInteira(a,b){
    let result = a%b;
    alert(`O resto da divisão entre ${a} e ${b} é ${result}`);
}

function potenciacao(a,b){
    let result = a**b
    alert(`${a} elevado a ${b} é igual a ${result}`);
}

function calculadora(){
    let operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));
    if (operacao<0 || operacao >=7 ){
        alert("Erro! Operação inválida!");
        calculadora();
    } else{
        let n1 = Number(prompt("Insira o primeiro valor: "));
        let n2 = Number(prompt("Insira o segundo valor: "));
        switch (operacao) {
            case 1:
                soma(n1,n2);
                break;
            case 2:
                subtracao(n1,n2);
                break;
            case 3:
                multiplicacao(n1,n2);
                break;
            case 4:
                divisaoReal(n1,n2);
                break;
            case 5:
                divisaoInteira(n1,n2);
                break;
            case 6:
                potenciacao(n1,n2);
                break;
        }
    }
}

function novaOperacao(){
    let opcao = Number(prompt("Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não"));
    if (opcao ==1){
        calculadora();
        novaOperacao();
    } else if (opcao ==2){
        alert("Até mais!");
    } else{
        novaOperacao();
    }
}
calculadora();
novaOperacao();