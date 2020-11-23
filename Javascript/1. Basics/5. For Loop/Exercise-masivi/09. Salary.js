function salary(input) { //[] takiva skobi na vhod stavat 1 
    let salary = Number(input[1]); //zaplatata zapochva ot 1
   
    for (i = 2; i <= input.length; i++) {//taka se gleda broikata na bukvite
      let ch = input[i]; // taka se izvajda 1 bukva ot dumata
   
      if (ch == "Facebook") {
        salary -= 150;
      } else if (ch == "Instagram") {
        salary -= 100;
      } else if (ch == "Reddit") {
        salary -= 50; //izvajdane
      } //ako dumata e ravna na nqkoq ot izbroenite
   
      if (salary <= 0) {
        break; //ako dotuk zaplatata e 0 ili po malko da chupi kym console.log..
      }
    }
   
    if (salary <= 0) {
      console.log(`You have lost your salary.`);
    } else {
      console.log(Math.floor(salary));//cqlo chislo nadolu zaktrugleno
    }
  }
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);