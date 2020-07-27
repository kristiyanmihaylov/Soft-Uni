function solve(totalPages, pagesPerHour, numberDays){
    totalPages = Number(totalPages);
    pagesPerHour = Number(pagesPerHour);
    numberDays = Number(numberDays);
    
    let totalHours = totalPages / pagesPerHour;
    let neededHoursPerDay = totalHours / numberDays;

    console.log(neededHoursPerDay);
}