function solve(arg1, arg2, arg3){
    let fTime = Number(arg1);
    let sTime = Number(arg2);
    let tTime = Number(arg3);

    let totalTime = fTime+sTime+tTime;
    let minutes = Math.floor(totalTime/60);
    let seconds = totalTime%60;

    if(seconds<10){
        console.log(`${minutes}:0${seconds}`);
    } else{
        console.log(`${minutes}:${seconds}`);
    }
}