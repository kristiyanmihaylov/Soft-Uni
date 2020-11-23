function record(arg1, arg2, arg3){
    let recordSec = Number(arg1);
    let distanceMet = Number(arg2);
    let metersPerSec = Number(arg3);

    let distancePerSec = distanceMet*metersPerSec;
    let addedWaterResist = Math.floor(distanceMet/15)*12.5;
    let totalTime = distancePerSec+addedWaterResist;

    if(recordSec<=totalTime){
        console.log(`No, he failed! He was ${((totalTime-recordSec).toFixed(2))} seconds slower.`);
    } else{
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}