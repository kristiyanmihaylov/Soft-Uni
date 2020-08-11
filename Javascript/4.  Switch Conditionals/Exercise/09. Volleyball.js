function volley (arg1, arg2, arg3){
    let year = arg1;
    let holiday = Number(arg2);
    let weekendGrad = Number(arg3);
    let weekendSofia = 0;
    let sumGamesSofia = 0;
    let sumGamesGrad = 0;
    let sumGamesHoliday = 0;

    weekendSofia = 48-weekendGrad;
    sumGamesSofia = weekendSofia*(3/4);
    sumGamesGrad = weekendGrad;
    sumGamesHoliday = holiday*(2/3);

    let totalGames = sumGamesSofia+sumGamesGrad+sumGamesHoliday;

    switch(year){
        case 'leap':
            let additional = totalGames*0.15;
            let result = totalGames+additional;
            console.log(Math.floor(result));
            break;
        case 'normal': console.log(Math.floor(totalGames));
            break;
    }
}