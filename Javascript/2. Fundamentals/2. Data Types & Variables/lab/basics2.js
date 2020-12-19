function myFunc() {
    console.log(myVar);
    var myVar = 'peter';

}
myFunc();

/*
If Condition using var/let

function myFunc() {
    let myVar = 6;
    console.log('inside function');
    console.log(myVar);

    if (myVar == 6) {
        var result = 'some result';
    }

    console.log('outside loop');
    console.log(result);
}
myFunc();
*/

/*
Loop with Var or Let

function myFunc() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log('outside loop');
    console.log(i);
}
myFunc();
*/

/*
var someGlobal = 5; 
// vs dr filelove q vijdat
// zashtoto se zakacha za globalniq file

function myFunc() {
    console.log(myVar); !!!

    var myVar = 'peter';
}
myFunc();

// undefinded
// zashtoto trqbva vinagi da e predi da
// q zastupim kato output
*/