function vacation(group, type, dayWeek) {
    let total = 0;
    if (dayWeek === 'Friday') {
        if (type === 'Students') {
            if (group >= 30) {
                total = (8.45 * group) * 0.85;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                total = 8.45 * group;
                console.log(`Total price: ${total}`);
            }
        } else if (type === 'Business') {
            if (group >= 100) {
                total = (group - 10) * 10.90;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                total = 10.90 * group;
                console.log(`Total price: ${total.toFixed(2)}`);
            }
        } else if (type === 'Regular') {
            if (group >= 10 && group <= 20) {
                total = (15 * group) * 0.95;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                total = 15 * group;
                console.log(`Total price: ${total.toFixed(2)}`);
            }
        }
    } else if (dayWeek === 'Saturday') {
        if (type === 'Students') {
            if (group >= 30) {
                total = (9.80 * group) * 0.85;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                total = 9.80 * group;
                console.log(`Total price: ${total}`);
            }
        } else if (type === 'Business') {
            if (group >= 100) {
                total = (group - 10) * 15.6;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                total = 15.60 * group;
                console.log(`Total price: ${total.toFixed(2)}`);
            }
        } else if (type === 'Regular') {
            if (group >= 10 && group <= 20) {
                total = (20 * group) * 0.95;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                total = 20 * group;
                console.log(`Total price: ${total.toFixed(2)}`);
            }
        }
    } else if (dayWeek === 'Sunday') {
        if (type === 'Students') {
            if (group >= 30) {
                total = (10.46 * group) * 0.85;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                total = 10.46 * group;
                console.log(`Total price: ${total}`);
            }
        } else if (type === 'Business') {
            if (group >= 100) {
                total = (group - 10) * 16;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                total = 16 * group;
                console.log(`Total price: ${total.toFixed(2)}`);
            }
        } else if (type === 'Regular') {
            if (group >= 10 && group <= 20) {
                total = (22.5 * group) * 0.95;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                total = 22.5 * group;
                console.log(`Total price: ${total.toFixed(2)}`);
            }
        }
    }
}
vacation(
    40,
    "Regular",
    "Saturday"
);