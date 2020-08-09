function books(inputData){
    let index = 1;
    let wantedBook = inputData[0]; //lubimata kniga
    let nextBook = inputData[index]; //start na turseneto
    index++;
    let bookIsFound = false; //buleva za logika

    while(nextBook !=='No More Books'){
        if(nextBook === wantedBook){
            bookIsFound = true;
            break;
        }
        index++;
        nextBook=inputData[index]; //taka smqta sledvashtata kniga
    }
    if(bookIsFound === false){
        console.log('The book you search is not here!');
        console.log(`You checked ${index-1} books.`);
    } else {
        console.log(`You checked ${index-1} books and found it.`);
    }
}
books([ //tova e sintaksis za masiv
    "Troy",
    "Stronger",
    "Life Style",
    "Troy"
]); //taka e dobre za da vijdame dali imame masiv