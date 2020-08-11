function multiTable(arg1){
   let num = Number(arg1);
   for(let i = 1; i<=10; i++){
       let result = i*num; //result za da se otpechata
   console.log(`${i} * ${num} = ${result}`);
   }
}
multiTable('5');