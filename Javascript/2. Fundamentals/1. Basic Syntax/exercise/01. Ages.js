function age(num) {
    if (num >= 0 && num <= 2) {
        console.log('baby');
    } else if (num >= 3 && num <= 13) {
        console.log('child');
    } else if (num >= 14 && num <= 19) {
        console.log('teenager');
    } else if (num >= 20 && num <= 65) {
        console.log('adult');
    } else if (num >= 66) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
}
age(100);

// ·	0-2 – baby; 
// ·	3-13 – child; 
// ·	14-19 – teenager;
// ·	20-65 – adult;
// ·	>=66 – elder; 
// ·	In all other cases - out of bounds