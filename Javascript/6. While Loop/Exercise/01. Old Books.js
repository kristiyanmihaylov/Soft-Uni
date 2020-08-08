function books(inputData){

    let wantedBook = inputData[0]; //lubimata kniga
    let nextBook = inputData[1]; //start na turseneto
    let checkedBooks = 0;

    while(nextBook !=='No More Books'){
        if(nextBook === wantedBook){
            break;
        }
        checkedBooks++;
        nextBook=inputData[checkedBooks+1]; //taka smqta sledvashtata kniga
    }
    if(nextBook === wantedBook){
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${checkedBooks} books.`);
    }
}
books([ //tova e sintaksis za masiv
    "Troy",
    "Stronger",
    "Life Style",
    "Troy"
]); //taka e dobre za da vijdame dali imame masiv