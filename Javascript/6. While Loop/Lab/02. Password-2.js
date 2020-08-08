function pass(input){
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let temporaryPass = input[index];

    while(temporaryPass !==password){
        temporaryPass = input[index];
        index++;
        break; /*za da spre funkciqta shtom e namerila reshenie*/
    }
    console.log(`Welcome ${username}!`);
}
pass(['Nakov', '124', ]);