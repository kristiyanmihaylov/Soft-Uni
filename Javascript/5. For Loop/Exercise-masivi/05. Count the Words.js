function count(text){
    //kogato e string nqma nujda ot prezapisvane kakto na chislo
    let spaces = 0;
    for(index = 0; index<text.length; index++){
        let symbol = text[index];
        if(symbol===' '){
            spaces+=1;
        }
    }
    words = spaces+1; // vinagi kogato imam kalkulaciq koqto se povtarq
    if(words>10){
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }
}
count("This message has exactly eleven words. One more as it's allowed!");