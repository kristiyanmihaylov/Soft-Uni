function solve(){
    let i=0;
    while(i<10){
        if(i%2===0){
            i++;
            continue; //propuska sledvashtata interaciq
            //tova mu e razlikata s break;
        }
        console.log(i);
        i++;
    }
}
solve();