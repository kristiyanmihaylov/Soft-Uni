function animal(arg1){
    let classAnimal = arg1;

    switch(classAnimal){
        case 'dog': console.log('mammal');
        break;
        case 'crocodile':
        case 'tortoise':
        case 'snake': console.log('reptile');
        break;
        default: console.log('unknown');
        break;
    }
}