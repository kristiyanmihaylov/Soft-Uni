function solve() { //chasovnik s vlojeni cikli
    for (let hour = 0; hour < 24; hour++) {
        for (let min = 0; min < 60; min++) {
            for (let sec = 0; sec < 60; sec++) {
                let h = hour;
                let m = min;
                let s = sec;
                if (hour < 10) {
                    h = '0' + h;
                }
                if (min < 10) {
                    m = '0' + min;
                }
                if (sec < 10) {
                    s = '0' + sec;
                }
                console.log(h + ':' + m + ':' + s);
            }
        }
        // za 1 interaciq na vunshniq cikul - vutreshniq shte
        //napravi vsichkite si vurtreshni interacii
    }
}
solve();