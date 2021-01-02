function DaysWeek(num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    if (num >= 1 && num <= 7) {
        console.log(days[num - 1]);
        //za da mahnem 0index
    } else {
        console.log(`Invalid day!`);
    }
}
DaysWeek([3]);
DaysWeek([5]);
DaysWeek([-3]);