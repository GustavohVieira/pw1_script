function regradetres(a, b, c, d){
    if (a == 0){
        a = (b*c)/d;
        console.log("a");
        console.log(a);
    }else if (b == 0){
        b = (a*d)/c;
        console.log("b");
        console.log(b);
    }else if (c == 0){
        c = (a*d)/b;
        console.log("c");
        console.log(c);
    }else{
        d = (b*c)/a;
        console.log("d");
        console.log(d);
    }
}

console.log(regradetres(0, 320, 40, 128));