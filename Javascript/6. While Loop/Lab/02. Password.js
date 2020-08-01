function pass(input){
    let index=0;
    let username=input[index];  
    index++;
    let password = input[index];
    index++;
    let temporaryPass=input[index];
    index++;

    while(temporaryPass !==password){
        temporaryPass=input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);

}
pass(['Nakov', '124', ]);