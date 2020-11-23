function readText(input){
    let index = 0;
    let text = input[index];
    index++;
    while(text !=='Stop'){
        console.log(text); /*za da spre predi Stop*/
        text = input[index];
        index++;
    }
}
readText(['yeah', 'Nakov','Stop','MHM']);