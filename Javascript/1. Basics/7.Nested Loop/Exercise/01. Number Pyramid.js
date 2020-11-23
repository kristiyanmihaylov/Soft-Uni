function pyramid(input) {
    let maxNum = Number(input[0]);
    let currentNum = 1;
    let isFinished = false;

    for (let row = 1; row <= maxNum; row++) {
        let rowNum = '';

        for (let num = 1; num <= row; num++) {
            if (currentNum > maxNum) {
                break; // samo zavurshva cikula v koito e
                // no ne prekusva vunshniq cikul
            }
            rowNum += `${currentNum} `;
            currentNum++;
        }
        console.log(rowNum);

        if (isFinished === true) {
            break;
        }

    }
}
pyramid([
    '12'
]);