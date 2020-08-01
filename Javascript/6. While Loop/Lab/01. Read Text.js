function solve(input){
    let index = 0;
    let text = input[index];
    index++;

    while(text !=='Stop'){ //taka text da e 
        //razlichen ot 'Stop'
        
        //taka breakva ako imam stop, 
        //puk ako nqmam vliza v cikula
            console.log(text);
            text=input[index];
            index++;
    
    }
}
solve(['yeah', 'Nakov','Stop','MHM']);