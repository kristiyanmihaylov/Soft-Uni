function oldBook(input) {
    let lovedBook = input[0];
    let books = input[1];
    let checked = 0;

    while (books !== 'No More Books') {
        if (books === lovedBook) {
            break;
        }
        checked++;
        books = input[checked + 1];
    }
    if (books === lovedBook) {
        console.log(`You checked ${checked} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checked} books.`);
    }
}
oldBook([
    "The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"
]);