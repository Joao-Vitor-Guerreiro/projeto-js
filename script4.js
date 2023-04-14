function pegaNota(nota) {
    let valor = nota;

    if(nota < 60){
        console.log("F")
    } else if (nota <= 69) {
        console.log("D")
    } else if (nota >=70) {
        console.log("C")
    } else if (nota <= 89) {
        console.log("B")
    } else {
        console.log("A")
    }

}

pegaNota(20);

function getScore(score){
    let scoreA = score >= 80 && score <= 89
    let scoreB = score >= 70 && score <= 79
    let scoreC = score >= 60 && score <= 69
    let scoreD = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else {
        scoreFinal = "Nota inválida"
    }
}

getScore(50);