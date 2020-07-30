function leapYears(arg1, arg2){
    let year1 = Number(arg1);
    let year2 = Number(arg2);

        for(let i = year1; i<=year2; i+=4){ //na 4 zashtoto e visokosna
            if(i%2===0){ //dali se deli samo na chetno da e
            console.log(i);
        }
    }
}
leapYears('2000', '2011');

/*Напишете функция, която получава два аргумента. Първият е високосна година, 
а вторият произволна година.Отпечатайте в конзолата на нов ред само високосните години 
в интервала между получените две такива. 
*/