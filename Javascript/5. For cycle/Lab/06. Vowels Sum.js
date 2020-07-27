function vowels(arg1){
    let text = arg1;
    let sum = 0; // dobavqm sumata ot vs bukvi

    for(let i = 0;i< text.length;i++ ){
        let ch = text[i];
        switch(ch){ //izpolzvame switch zashtoto nqmame logicheski turseniq
            case 'a': sum+=1;break; 
            case 'e': sum+=2;break;
            case 'i': sum+=3;break;
            case 'o': sum+=4;break;
            case 'u': sum+=5;break;
        }
    }
    console.log(sum);
}
vowels('bamboo');