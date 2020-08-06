function graduation(input) {
   let index = 0;
   let name = input[0];
   index++;
   let grades = 1;
   let sum = 0;
   let excluded = 0;

   while (grades <= 12) {
      let grade = Number(input[index]); // za da e chislo
      index++;
      if (grade < 4) {
         excluded++;
         if (excluded === 2) {
            console.log(`${name} has been excluded at ${grades} grade`); //obshtiq sbor
            break;
         }
         continue; //da produlji sled vlezliq if za while lopop
      }
      sum += grade;
      grades++;
   }
   if (excluded<2) { //ako excluded sa po malko ot 2 puti togava
      console.log(`${name} graduated. Average grade: ${((sum/12).toFixed(2))}`);
   }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);