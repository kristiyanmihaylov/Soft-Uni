function divisible() {
    let num = 1;
    for (i = 1; i <= 100; i += 3) {
        console.log(num);
        num = (i * num) / 3;
    }
}
divisible();

// WRONG