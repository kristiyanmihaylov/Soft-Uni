function factorial(arg1){
    let num = Number(arg1);
    let result = 1;
    for(let i = 2;i<=num;i++){
        result*=i; // umnojavam rezultata po i dokato i se uvelichava
    }
    console.log(result); // izvun for za da dade samo krainiq rezultat
}
factorial('4');
/*Напишете функция, която получава число и отпечатва 
на конзолата резултата от неговия факториел.
Факториел е функция на цяло число, равна на произведението 
на всички естествени числа, по-малки или равни на него.
Например факториел от 4 означава: 1*2*3*4 = 24.
*/