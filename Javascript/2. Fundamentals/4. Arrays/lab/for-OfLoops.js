let numbers = [1, 2, 3, 4, 5];
let output = '';

for (let number of numbers) {
    output += `${number} `;
}
console.log(output);
//--------------------------------------------

for (let widgets of numbers) {
    if (widgets == 3) {
        break;
    } else {
        console.log(widgets);
    }
}