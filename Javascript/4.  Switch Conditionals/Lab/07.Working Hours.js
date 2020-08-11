function work(arg1, arg2){
    let hour = Number(Math.round(arg1));
    let dayOfWeek = arg2;

    if((hour<=18 && hour>=10)){
        switch(dayOfWeek){
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday': console.log('open');
            break;
            default: console.log('closed');
            break;
        }
    } else {
        console.log('closed');
    }
}