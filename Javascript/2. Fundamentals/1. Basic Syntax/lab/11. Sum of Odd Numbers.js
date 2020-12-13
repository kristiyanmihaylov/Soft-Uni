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