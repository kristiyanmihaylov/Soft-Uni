function substitude(a) {
    k = Number(a[0]);
    l = Number(a[1]);
    m = Number(a[2]);
    n = Number(a[3]);

    let output = '';
    let output2 = '';
    let smeni = 0;

    let possible1 = [];
    let possible2 = [];



    for (let i = k; i <= 8; i++) {

        for (let y = 9; y >= l; y--) {

            if (i % 2 === 0 && y % 2 !== 0) {
                output = i.toString() + y.toString();
                possible1.push(output);
            }


        }

    }

    for (let i = m; i <= 8; i++) {

        for (let y = 9; y >= n; y--) {

            if (i % 2 === 0 && y % 2 !== 0) {
                output2 = i.toString() + y.toString();
                possible2.push(output2);
            }



        }

    }


    for (let i = 0; i < possible1.length; i++) {


        for (let y = 0; y < possible2.length; y++) {

            if (smeni < 6) {

                if (possible1[i] !== possible2[y]) {
                    console.log(possible1[i] + ' - ' + possible2[y]);
                    smeni++;
                } else {
                    console.log(`Cannot change the same player.`);
                }
            }
        }
    }
}
substitude(
    ['7', '6', '8', '5']
);