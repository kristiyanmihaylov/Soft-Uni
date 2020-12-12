function login(arr) {
    let username = arr.shift(); //remove 1st arr
    let pass = username.split('').reverse().join('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === pass) {
            console.log(`User ${username} logged in.`);
        } else{
            if(i==3){
                console.log(`User ${username} blocked!`);
                break; // izliza ot cikula
                // za da ne printira posledniq log
            }
            console.log('Incorrect password. Try again.');
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);