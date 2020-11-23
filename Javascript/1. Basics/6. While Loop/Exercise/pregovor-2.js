//1;41;00 Lab Lecture continue




















/*
function solve(input) {
    let index = 0;
    let username = input[index];
    index++; //do tuk vadi imeto i produljava napred
    let password = input[index]; //sledvashiq index
    index++;
    let tempPass = input[index]; //sledvashiq index
    while (tempPass !== password) {
        tempPass = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}
solve(['Nakov', '1234', 'Pass', '1324', '1234'])
*/


/*function solve(input) {
    let index = 0;
    let name = input[index];
    index++;

    //dokato name e razlichen ot stop napravi:
    while (name !== 'Stop') { //taka breakvam na 'Stop'
        /*if (name === 'Stop') {
            break; //taka breakvam na "Stop"
        }//
        console.log(name); //tuk e izhoda
        name = input[index]; //tuk mi e deistvieto za da imam while cikul
        index++;
    }
    console.log(name.length); //pokazva i '"Stop" kato chast no sled tova chupi
}
solve(['Gosho', 'Tosho', 'Kris', 'Stop', 'Bate'])
*/