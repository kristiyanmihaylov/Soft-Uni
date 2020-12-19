let myVar = 5;

function myFunc() {
    // inside scope
    console.log('inside function');
    console.log(myVar);

    if (myVar == 5) {
        var result = 'some result'; 
        //var ako iskam da go
        // polzvam izvun if{} cikula
    }

    /*
    for (var i = 0; i < 10; i++) {
        console.log(i);
    } //using var I can get the loop global
    */

    console.log('outside loop');
    console.log(result);
}

//global scope
console.log('global scope');
console.log(myVar);

myFunc();
