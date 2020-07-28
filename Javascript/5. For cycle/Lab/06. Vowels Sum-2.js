function vowels(arg1){
    let text = arg1;
    let sum = 0;

    for(i=0;i<text.length;i++){
        let ch = text[i]; //individualni simvoli se vadqt taka ot string
        switch(ch){
            case 'a': sum+=1; break;
            case 'e': sum+=2; break;
            case 'i': sum+=3; break;
            case 'o': sum+=4; break;
            case 'u': sum+=5; break;
        }
    }
    console.log(sum); // za da mi izleze krainiq rezultata sys arg1
}
vowels('hello');