function walk(input){
    let steps = 0;
    let index = 0;
    let target = 10000;
    let nextSteps=input[index];
    while(nextSteps !=='Going home' && nextSteps !==undefined){
        steps+=Number(nextSteps);
        index++;
        nextSteps=input[index]; //sus undefined da bude vkluchen v uslovieno
    }
    if(nextSteps === 'Going home'){
        steps+=Number(input[index+1]);
    }
    if(steps>=target){
        console.log(`Goal reached! Good job!`); 
        console.log(`${steps-target} steps over the goal!`);
    } else {
        console.log(`${(target-steps)} more steps to reach goal.`);
    }
}
walk([
    "1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"
]);