function trippleLetters(n) {
    for (let i = 0; i < n; i++) {
        let firstLetter = String.fromCharCode(i + 97);
        for (let j = 0; j < n; j++) {
            let secondLetter = String.fromCharCode(j + 97);
            for (let k = 0; k < n; k++) {
                let thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}
trippleLetters(3);

function latin(n) {
    for (let i = 0; i < n; i++) {
        let first = String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            let second = String.fromCharCode(97 + j);
            for (let k = 0; k < n; k++) {
                let third = String.fromCharCode(97 + k);
                for (let r = 0; r < n; r++) {
                    let forth = String.fromCharCode(97 + r);
                    console.log(`${first}${second}${third}${forth}`);
                }
            }

        }
    }
}
latin(4);