// take num n and make triangle from 1 to n

function triangle(n) {
    for (let i = 1; i <= n; i++) {
        let line = ''; // veche na 2riq red za space
        for (let j = 1; j <= i; j++) {
            line += i + ' ';
        }
        console.log(line); // za da loopva bezkrai
    }
}
triangle(3);