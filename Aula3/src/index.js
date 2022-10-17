function calculaA(b, c, d){
    return (b*c)/d;
}

function calculaB(a, c, d){
    return (a*d)/c;
}

function calculaC(b, a, d){
    return (a*d)/b;
}

function calculaD(b, c, a){
    return (b*c)/a;
}

function regradetres(a, b, c, d){
    if (a == 0){
        return (b, c, d);
    }else if (b == 0){
        return (a, c, d);
    }else if (c == 0){
        return (b, a, d);
    }else{
        return (b, c, a);
    }
}

console.log(regradetres(0, 320, 40, 128));