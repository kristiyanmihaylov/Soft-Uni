 
 /* Masiv + String
 function test(arr) {
     let line = ''; //tip string = prazen

     for (let i = 0; i < arr.length; i++) {
         const n = arr[i];
         line += n + ', '; //dolepq dva stringa + spaceche
         
        }
        console.log(line);

        console.log(arr.join(', ')); // bez poslednata
 }
 test(['1', '2', '3']);
*/
 
/* If + masiv

 function test(arr) {
     let n = Number(arr.shift());

     if (n == '1') { //tuk sravnqva i po tip i chislo
         //ako udarim samo '==' togava e true
         console.log(n);
         let x = 5;
         if (true) {
             console.log(x);
         }
     }
 }
 (test(['1', '2', '3']));
*/

 /* Rejene/Promqna na element ot Masiv = Shift
 function test(arr) {
     let n = Number(arr.shift()); // izvajda '1' ot masiva i gotov za math operations
     console.log(n);
     let m = arr.shift(); // izvajda '2' ot masiva
     console.log(m);

     console.log(arr);
 }
 test(['1', '2', '3']); 
 */

 /* FIND IN MASIV INDEX

 function test(arr) {
     console.log(arr[arr.length - 1]);
 }
 test(['1', '2', '3']);

 //3
 */

 /* MASIV

 function test(a) {
     console.log(a[0]);
     //purvi masiv
     console.log(a[1]); 
     //vtori masiv
     console.log(a[2]);
     //treti masiv
 }
 test(['1', '2', '3']); */

 //1
 //2
 //3