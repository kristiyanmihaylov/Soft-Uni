function solve() {
    let isBreak = false; //s buleva i break chupi na 5
    for (let a = 1; a <= 10; a++) {
        for (let b = 1; b <= 10; b++) {
            console.log(a + ' ' + b);
            if (b === 5) {
                isBreak = true;
                break; //chupi i izkarva
            }
        }
        if (isBreak) {//proverqva dali e true
            break;  //i ako e true prekusva cikula
        }
    }
}
solve();