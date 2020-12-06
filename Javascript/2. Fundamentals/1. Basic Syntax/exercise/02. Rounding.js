function round(num1, precision) {
    let result = 0;
    if (precision > 15) {
        precision = 15;
    }
    result = parseFloat(num1.toFixed(precision));
    console.log(result);
}
round(3.1415926535897932384626433832795, 2);