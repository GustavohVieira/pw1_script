function encontraMultiplos(multiploRequeridos) {
    let m = 0;
    let multiplo = 0;
    let sorteios = 1;
    while (m < multiploRequeridos) {
        multiplo=Math.floor(Math.random() * 100)
        if (multiplo % 7 == 0) {
            m++
            console.log(multiplo+" É multiplo.")
        } else {
            sorteios++
        }
    }

    console.log("Foram realizados "+sorteios+" sorteios")

} 
encontraMultiplos(10);