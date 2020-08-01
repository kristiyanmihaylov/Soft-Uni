function graduation(input) {
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 0;
    while (grades <= 12) {
       index++;
       let grade = Number(input[index]);
       if (grade < 4.00) {
          // TODO: increase excluded count and break if is more than 1
          continue;
       }
    // TODO: add grade to sum and increase grades count
    }
    let average = sum / 12;    //TODO: print the output
 }
graduation(); 