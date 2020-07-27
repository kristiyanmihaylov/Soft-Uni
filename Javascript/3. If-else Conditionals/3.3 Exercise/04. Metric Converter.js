function convertor(arg1, arg2, arg3){
    let num = Number(arg1);
    let entry = arg2;
    let exit = arg3;
    let result = 0;
   
       if(entry === 'm'){
           result = exit = num*100;
           console.log(result.toFixed(3));
   
       } else if(entry === 'cm'){
           result = exit = num*10;
           console.log(result.toFixed(3));
   
       } else if(entry === 'mm'){
           result = exit = num/1000;
           console.log(result.toFixed(3));
       }
   }