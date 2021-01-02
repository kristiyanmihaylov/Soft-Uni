function firstLast(numbers) {
    let first = numbers[0];
    let last = numbers[numbers.length - 1];
    // taka izchislqvame posledniq index
    // bez da go znaem predvaritelno!!!
    console.log(first + last);
    // ----------------------
    console.log(numbers[0] + numbers[numbers.length - 1]);
    //ednakyv otgovor
}
firstLast([8, 13, 5, 1, 11]);