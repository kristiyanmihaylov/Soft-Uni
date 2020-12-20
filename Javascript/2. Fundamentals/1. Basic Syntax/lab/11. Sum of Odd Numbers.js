function odd(num) {
    let sum = 0;
    let counter = 0;
    for (let i = 1; i <= 100; i += 2) { //nechetno
        console.log(i);
        counter++; //za da smqta ciklite
        sum += i;
        if (counter == num) { //koga da spre
            console.log(`Sum: ${sum}`);
            break; //da izkara ot for cycle shto nameri
        }
    }
}
odd(5);

function odd(num) {
    //declare string to hold sum
    let sum = 0;
    // use loop to repeat and sum
    for (let current = 1, count = 0; count < num; current += 2, count++) {
        //izpolzvame poveche promenlivi s "," za loop

        console.log(current);
        sum += current;
    }
    // log result 
    console.log(sum);
}
odd(5);

function odd(n) {
    let sum = 0;
    let count = 0;
    let current = 1;
    while (count < n) {
        sum += current;
        console.log(current);
        current += 2;
        count++;
    }
    console.log(sum);
}
odd(5);