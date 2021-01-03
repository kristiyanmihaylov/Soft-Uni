let arr = [1, 2, 3];
console.log(arr.join(' - ')); //postavq string mejdu elementite
let item = arr.shift();
// method na masiva kudeto maha purviq element ot masiv

console.log(arr);
console.log(item);

item = arr[arr.length]; //undefined
// znachi sme izlezli izvun masiva taka
console.log(item);

item = arr[arr.length - 1]; // taka stiga do kraq
console.log(item);

item = arr.includes(2); // return true/false boolean
console.log(item);

let str = 'a, b, c'.split(', ');
//splitva gi na otdelni stringove vmesto 1 golqm
console.log(str);