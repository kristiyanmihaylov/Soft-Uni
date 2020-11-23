function leap(arg1, arg2){
    let fYear = Number(arg1);
    let lYear = Number(arg2);

    for(let year = fYear; year <= lYear; year++){
        //console.log(year); za da vidq dali year++ e kakto trqbva
        if((year%4===0)&&(year%100 !==0)||(year%400===0)){
            //tova e logicheskata fuknciq za visokosna godina
            console.log(year);
        }
    }
}
leap('1584', '1597');
//VINAGI MISLI KAKVI SA SITUACIITE KOITO 
//THE CLIENTSHTE SBURKA VHODNITE DANNI OSHTE OTNACHALO
