function comb(input) {
    let endResult = Number(input[0]);
    combinations = 0;
    let taskDone = false;

    for (let x1 = 0; x1 <= endResult; x1++) {
        for (let x2 = 0; x2 <= endResult; x2++) {
            for (let x3 = 0; x3 <= endResult; x3++) {
                let result = x1 + x2 + x3;
                if (result === endResult) {
                    combinations++;
                    taskDone = true;
                    continue;
                }
            }
            if (taskDone) {
                continue;
            }
        }
        if (taskDone) {
            continue;
        }
    }
    console.log(combinations);
}
comb(['25']);