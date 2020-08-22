function everest(input) {
    index = 0;
    let campStay = input[index];
    let heightReached = Number(input[index + 1]);
    target = 8848;
    start = 5364;
    counter = 1;
    isReached = false;

    while (input[index] !== 'END') {
        campStay = input[index];
        index++;
        heightReached = Number(input[index]);
        index++;
        start += heightReached;
        if (campStay === 'Yes') {
            counter++;
            if (counter >= 5) {
                isReached = false;
                break;
            }
        }
        if (start >= target) {
            isReached = true;
            break;
        }
    }
    if (isReached === true) {
        console.log(`Goal reached for ${counter} days!`);
    } else {
        console.log(`Failed!`);
        console.log(start);
    }
}
everest([
    "Yes",
    "535",
    "Yes",
    "849",
    "Yes",
    "499",
    'Yes',
    '400',
    'Yes',
    '500'
]);