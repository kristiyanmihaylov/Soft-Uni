function rightPlace(word, char, template) {
    let result = word.replace('_', char);
    // word.replace(zamenqshtoto, zamenitelq)

    if (result === template) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String');

// // First string will be a word with a 
// missing char replaced with a underscore '_'
// // You have to replace the character 
// with the missing part (underscore) from 
// the first string and compare the result 
// with the second string.
// // If they are equals you should print 
// "Matched", otherwise print "Not Matched".