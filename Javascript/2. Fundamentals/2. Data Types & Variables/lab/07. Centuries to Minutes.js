function centToMin(numCent) {
    let centuries = numCent;
    let years = centuries*100;
    let days = Math.trunc(365.2422*years);
    // trunc brings the number without the .numbers left
    let hours = days*24;
    let minutes = hours*60;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
centToMin(1);