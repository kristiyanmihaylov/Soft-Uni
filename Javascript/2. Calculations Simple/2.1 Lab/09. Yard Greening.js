function yard(arg){
    let area = Number(arg);
    let finalPrice = area*7.61;
    let discount = finalPrice*0.18;
    
    console.log(`The final price is: ${finalPrice - discount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}