function character(arg1){
    let text = arg1; // ne znaem do kolko e dulug texta
    // 0 = index, 1 = 2ri index ... 
    //i<text.lenght zashtoto lenght = simvolite - 1;
    for(let i = 0; i < text.length; i++){
        console.log(text[i]);
    }
}
character('hello');