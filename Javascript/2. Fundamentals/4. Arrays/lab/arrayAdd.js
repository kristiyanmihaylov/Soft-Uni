let numbers = [8, 13, 5, 1, 11];
let words = ['one', 'two', 'three'];

numbers.push(31);
numbers.push(43);
numbers.push(6);

//taka se dobavqt kym masiva 

console.log(numbers);
console.log(numbers.length);

console.log(numbers.includes('one')); //false
console.log(words.includes('one')); //true

console.log(numbers.join(' -> '));
//adds the element

let arrAsString = numbers.join(' -> ');
console.log(arrAsString);
console.log(arrAsString[2]);
console.log(arrAsString[3]);