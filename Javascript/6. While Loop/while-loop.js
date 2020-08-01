/*В програмирането често се налага да изпълним блок с 
команди няколко пъти
За целта използваме цикли – while, for и други

while(...){
    //code
}
1. uslovie
2. izpulnqvame koda
ako vurne true pravim 1. & 2.
ako vurne false pravim 3.
3. produljava kum druga fukcniq


//BEZKRAEN LOOP WHILE

function solve(){
    let counter = 0;
    while(true){
        console.log('Infinity loop');
        counter++;
        console.log(counter);
    }
}
solve();

//Izpolzvane na Break

izpolzva se samo v Switch i f Loops

function solve(){
    let counter = 0;
    while(true){
        console.log('Infinity loop');
        counter++; //pokazva tekushtata interaciq
        if(counter===10){
            break;
        }
    }
    console.log('End');
}
solve();

function solve(){
let a=5;
while(true){
    if(a>10){
        break;
    }
    console.log('a = ' +a);
    a++;
}
}
solve();


function solve(input){//kolekciq ot elementi
    let one = input[0];
    let two = input[1];
    let three = input[2];
    let four = input[3];
    */
/*
    //zatova tyk imame masiv za da moje da imame kakto 1
    // taka i poveche elementa bez da gi zadavame postoqnno
    
    let index = 0;//vinagi pochva ot nula za da e ok indexa
    let name = input[index]; //taka se pravi masiv
    index++;                 //vinagi go ima tova kum masiv
    
    while(true){ //tursim dokato poluchim komanda da prekusnem
        console.log(name);
        name=input[index];
        index++;
        if(name==='STOP'){ //taka znae dokude da vurti dokato ne spre
            break;
        }
    }
}
solve(['Grusho', 'Tosho', 'Pesho', 'Kiro', 'Pesho', 'Kiro', 'STOP']);
*/
function solve(){
    let a=5;
while(a<=10){
    console.log('a = '+a);
    a++;
}
}
solve();

