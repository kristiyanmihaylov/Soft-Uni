function printSum(start, end) {
    let line = '';
    let sum = 0;
    for (let i = start; i <= end; i++) {
        line += i + ' '; // za da sa na 1 liniq
        sum += i; // sumata ot chislata
    }
    console.log(line); //izvun for printiram
    console.log(`Sum: ${sum}`);
}
printSum(0, 26);