function theatre(typeOfDay, age) {
    age = Number(age);
    if (age >= 0 && age <= 18) {
        if (typeOfDay === 'Weekday') {
            console.log('12$');
        } else if (typeOfDay === 'Weekend') {
            console.log('15$');
        } else if (typeOfDay === 'Holiday') {
            console.log('5$');
        }
    } else if (age > 18 && age <= 64) {
        if (typeOfDay === 'Weekday') {
            console.log('18$');
        } else if (typeOfDay === 'Weekend') {
            console.log('20$');
        } else if (typeOfDay === 'Holiday') {
            console.log('12$');
        }
    } else if (age > 64 && age <= 122) {
        if (typeOfDay === 'Weekday') {
            console.log('12$');
        } else if (typeOfDay === 'Weekend') {
            console.log('15$');
        } else if (typeOfDay === 'Holiday') {
            console.log('10$');
        }
    } else {
        console.log('Error!');
    }
}
theatre('Holiday', -12);

/*
A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. 

If the given age does not fit one of the categories, you should print "Error!".  

Print the price of the ticket according to the table, or "Error!" if the age is not in the table.


*/