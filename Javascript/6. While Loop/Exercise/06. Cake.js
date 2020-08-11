function solution(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let cakeSize = Number(a * b);
    let index = 0;
    let pieces = input[2];
    let piecesTaken = 0;


    while (cakeSize > piecesTaken && pieces !== "STOP") {
        piecesTaken += Number(pieces);
        index++
        pieces = input[index + 2]



    }
    if (cakeSize < piecesTaken) {
        console.log(`No more cake left! You need ${piecesTaken-cakeSize} pieces more.`)
    } else if (pieces === "STOP") {
        console.log(`${cakeSize-piecesTaken} pieces are left.`)
    }

}
solution(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);