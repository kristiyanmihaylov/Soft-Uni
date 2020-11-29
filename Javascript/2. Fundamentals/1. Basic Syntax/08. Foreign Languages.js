function foreign(country) {
    let english = 'English';
    let spanish = 'Spanish';
    if (country === 'USA' || country === 'England') {
        console.log(english);
    } else if (country === 'Spain' || country === 'Argentina' || country === 'Mexico') {
        console.log(spanish);
    } else {
        console.log('unknown');
    }
}
foreign("Germany");

/*

Print the language, which the country speaks, or if it is unknown for your program, print "unknown".

English is spoken in England and USA; 
Spanish is spoken in Spain, Argentina and Mexico; 
for the others, we should print "unknown".

Think how you can merge multiple cases, in order to avoid writing more code than you need to.

*/