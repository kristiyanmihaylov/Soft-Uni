/*function solve(input){
    for(let i = 0; i<=12; i+=1){
        console.log(i);
    }
}
solve();
*/

// vinagi vuv "for" ima "let" funkciqta


// i = ime na promenliva - moje da e kakvoto iskam no
// e hubavo da se polzvat kratki dumi

// vmesto i=i+1 polzvai i+=1; ... tova sa sushtite operacii
// devs code short codes = best practise
// nikoga 'for' cycle nqma da vurne false


// i = 0 : pokazva ot kude zapochva interaciqta
// i<10 : pokazva do kude svurshva interaciqta
// i+=1; : pokazva kakva e funkciqta koqto trqbva da se izpulni

// nito edin ot tezi 3 komponenta ne e zaduljitelen
// koeto moje da znachi che moga da imam for cycle daje s 1 konstrukciq

/* UVELICHAVANE I NAMALQVANE*/ //= samo vurhu chislena stoinost

//Inkrementaciq  = uvelichavaneto
// pre fixed = ++a;
/*
function solve(){
    let a = 0;
    console.log(++a); //uvelichava stoinostta i izvushva deistvie zashtoto e pre fixed
    // kato zapazva stoinostta 
    console.log(a);
}
solve(); vrushta 1 & 1
*/
//post fixed = a++; // izpolzva se kato se uvelichava s 1
/*
function solve(){
    let a = 0;
    console.log(a++); //purvo izvurshva deistvieto i posle promenq stoinostta 
    console.log(a);
}
solve(); // vrushta 0 & 1
*/
/*
function solve(){
    let a = 0;
    console.log(a++); 
    console.log(a);
    for(let i = 0; i<10; i++){

    }
}
solve();
*/

////Inkrementaciq  = nqmalqvaneto
/*
function solve(){
    let a =1;
    console.log(--a); //namalqva stoinostta i izvushva deistvie zashtoto e pre fixed
    console.log(a);
}
solve(); // 0 & 0

function solve(){
    let a =1;
    console.log(a--);purvo izvurshva deistvieto i posle promenq stoinostta 
    console.log(a);
}
solve(); // 1 & 0
*/

/* Work with text*/

function solve(){
    let text = 'Softuni';

    console.log(text.length);// text.lenght = 7 elementa, space sushto se broi i taka = 8;
    console.log(text[6]); // vinagi se broi ot 0 v programiraneto
} // zashtoto broim ot 0 to togava dumata sled 6 e undefined
solve();

function solve(){
    let text = 'Todor';

    console.log(text.charAt(2)); // oshte edin nachin za vzimane
}
solve();

/*Techniques for using for cycles*/

//7th Task 07. Sum of Numbers
// konkretenaciq = vhod+"" = konkretenaciq

//let print = ''; //taka moga da pechatam na 1 red ne na nov red

