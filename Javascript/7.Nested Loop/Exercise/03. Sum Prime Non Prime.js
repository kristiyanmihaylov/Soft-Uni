function solve(input) {
    let index = 0;
    let currentInfo = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;
    
    while (currentInfo !== 'stop') {
        let number = Number(currentInfo);
        let lastDivider = Math.sqrt(number); //koren kvadraten
        let isPrime = true;
        
        if (number >= 0) { //ako chisloto e pozitivno
            
            for (let divider = 2; divider <= lastDivider; divider++) {
                let result = number % divider;
                
                if (result === 0) {
                    isPrime = false;
                    break; // raboti za Loop = For granicite mu
                    // no ne breakvame ot While Loop v tozi example
                }
            }
            if (isPrime === true) { //ako
                primeSum += number;
            } else {
                nonPrimeSum += number;
            }
        } else { //ili ako e negativno
            console.log('Number is negative.');
        }
        index++;
        currentInfo = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
solve([
    '3', '9',
    '0', '7',
    '19', '4',
    'stop'
]);