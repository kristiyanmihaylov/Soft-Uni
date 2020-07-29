function countWords(arg1){
    let text = arg1;
    let spaces = 0; // zashtoto za da smetna dumite mi trqbva mqstoto mejdu tqh 

    for(index = 0; index<text.length; index++){ // taka vijdam vseki index mejdu dumite
        let symbol = text[index];
        if (symbol===' '){
            spaces+=1; // taka formuliram spaces
        }
    }
    word = spaces+1; // taka veche smqtam dumite
    if(word>10){
        console.log(`The message is too long to be send! Has ${word} words.`);
    } else {
        console.log("The message was send successfully!");
    }
}
countWords(`This message has exactly eleven words. One more as it's allowed!`);