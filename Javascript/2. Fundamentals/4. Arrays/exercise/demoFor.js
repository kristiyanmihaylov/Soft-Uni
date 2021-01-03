let arr = [1, 2, 3];

for (const element of arr) {
    console.log(element);
}

for (let i = 0; i < arr.length; i++) {
    //i<=arr.length obikalq 1 element poveche
    //zatova e samo i<arr.length

    const elementTwo = arr[i];
    console.log(elementTwo);
}

let splited = 'stilinn'.split('i');
//splits into strings removing the mentioned element
console.log(splited);