function walking(input) {
    let steps = 0;
    let index = 0;
    let nextSteps = input[index];
    let targetSteps = 10000;

    while (nextSteps !== 'Going home' && nextSteps !== undefined) {
        steps += Number(nextSteps);

        index++;
        nextSteps = input[index]; //za da procheta sledvashtiq element
        continue;// za da produlji kum "if" vmesto da se vurti
    }
    if (nextSteps === 'Going home') { //ako trugva da se pribira
        steps += Number(input[index + 1]); //za da e indexa sled "Going home"
    }
    if (steps >= targetSteps) {
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(steps-targetSteps)} steps over the goal!`);
    } else {
        console.log(`${Math.abs(targetSteps-steps)} more steps to reach goal.`);
    }
}
walking([
    "1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"
]);