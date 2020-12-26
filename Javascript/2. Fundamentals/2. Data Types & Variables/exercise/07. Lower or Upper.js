function lowerOrUpper(char) {
    //string.toUpperCase();

    let upper = char.toUpperCase();
    if (char === upper) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerOrUpper('l');