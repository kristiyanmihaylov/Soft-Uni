function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let standardTickets = 0;
    let kidTickets = 0;
    let studentTickets = 0;

    while (command !== 'Finish' && index < input.length) {
        let name = command;
        let places = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let ticketsBought = 0;
        while (ticketType !== 'End') {
            let type = ticketType
            if (type === 'standard') {
                standardTickets++;
            } else if (type === 'kid') {
                kidTickets++;
            } else if (type === 'student') {
                studentTickets++;
            }
            ticketsBought++;
            if (ticketsBought === places) {
                break;
            }
            ticketType = input[index];
            index++;
        }
        console.log(
            `${name} - ${((ticketsBought / places) * 100).toFixed(2)}% full.`
        );
        command = input[index];
        index++;
    }
    let total = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${total}`);
    console.log(`${((studentTickets / total) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / total) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / total) * 100).toFixed(2)}% kids tickets.`);



}
cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);