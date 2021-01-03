let numbers = [8, 13, 5, 1, 11];
let words = ['one', 'two', 'three'];

for (let i = 0; i < numbers.length; i++) {
    console.log(`${i} -> ${numbers[i]}`);
} //tova e prieto v praktikata

//ili
for (let i = 0; i <= numbers.length - 1; i++) {
    console.log(`${i} -> ${numbers[i]}`);
} //efekta e edin i susht

console.log(words.toString());
//masiv to string

console.log(numbers.join(' ! '));
//adds between masiv info