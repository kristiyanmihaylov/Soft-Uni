function illidan(arg1, arg2, arg3) {
    let numPeople = Number(arg1);
    let strenghtPerson = Number(arg2);
    let healthBoss = Number(arg3);
    let strenghtPeople = numPeople * strenghtPerson;
    let result = Math.abs(strenghtPeople - healthBoss);

    if (strenghtPeople < healthBoss) {
        console.log(`You are not prepared! You need ${result} more points.`);
    } else if (strenghtPeople >= healthBoss) {
        console.log(`Illidan has been slain! You defeated him with ${result} points.`);
    }
}
illidan("15",
    "60",
    "1500"
)