function calculos ()

function escolhaOperacao (opcao, p1 ,p2, p3, p4){
    switch (opcao){
        case "pitagoras":
        return calculaPitagoras(p1, p2, p3);
        break;
        case "regra":
        return calculaRegra(p1, p2, p3, p4);
        break;
        case "calculadora":
        return calculaNumeros(p1, p2, p3);
        break;
        default:
            return "Fora do escopo de funções."
    }
}

// PITAGORAS

function calculaH(p2, p3){
    return Math.sqrt(Math.pow(p2, 2) + Math.pow(p3, 2));
}

function calculaCa(p3, p1){
    return Math.sqrt(Math.pow(p1, 2) + Math.pow(p3, 2));
}

function calculaCo(p2, p1){
    return Math.sqrt(Math.pow(p1, 2) + Math.pow(p2, 2));
}

function calculaPitagoras(p1, p2, p3){
    if(p1 == 0){
        return calculaH(p2, p3);
    }else if(p2 == 0){
        return calculaCa(p3, p1);
    }else{
        return calculaCo(p2, p1);
    }
}

function recebePitagoras(){
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let p3 = document.getElementById("p3").value;

    console.log("Resultado: "+calculaPitagoras(p1, p2, p3));
    document.getElementById("resposta").innerHTML=calculaPitagoras(p1, p2, p3);
}

// REGRA

function calculaA(p2, p3, p4){
    return (p2*p3)/p4;
}

function calculaB(p1, p3, p4){
    return (p1*p4)/p3;
}

function calculaC(p2, p1, p4){
    return (p1*p4)/p2;
}

function calculaD(p2, p3, p1){
    return (p2*p3)/p1;
}

function calculaRegra(p1, p2, p3, p4){
    if (p1 == 0){
        return (p2, p3, p4);
    }else if (p2 == 0){
        return (p1, p3, p4);
    }else if (p3 == 0){
        return (p2, p1, p4);
    }else{
        return (p2, p3, p1);
    }

}

function recebeRegra(){
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let p3 = document.getElementById("p3").value;
    let p4 = document.getElementById("p4").value;

    console.log("Resultado: "+calculaRegra(p1, p2, p3, p4));
    document.getElementById("resposta").innerHTML=calculaRegra(p1, p2, p3, p4);
}

// CALCULADORA