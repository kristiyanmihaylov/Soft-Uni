function solve(input) {
    let wantedBook = input[0];
    let nextBook = input[1];
    let counter = 0;
    while (nextBook !== 'No More Books') {
        if (nextBook === wantedBook) {
            break; //shom sym nameril knigata prekratqvam while
        }
        counter++;
        nextBook = input[counter + 1]; //taka dava sledvashiq element
    }
    
    if (nextBook === wantedBook) {
        console.log(`You checked ${counter} books and found it`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}
solve(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"
]);