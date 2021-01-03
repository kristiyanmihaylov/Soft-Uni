   function switchArr(num, arr) {
       let pariatlArr = [];
       //suzdavame prazen masiv

       for (let i = 0; i < num; i++) {
           //izpisvame 0 do numIndex
           pariatlArr.push(arr[i]);
           //suzdavame chastichen masiv
       }
       let result = '';
       //dobavqme elementa v string
       for (let i = pariatlArr.length - 1; i >= 0; i--) {
           //zapochvame otzad napred
           result += pariatlArr[i];
           result += ' ';
           //dobavqme space mejdu tqh
       }
       console.log(result);
   }
   switchArr(3, [10, 20, 30, 40, 50]);

   //-----------------------------------------------

   function reverse2(n, arr) {
       let result = []; //create array
       for (let i = n - 1; i >= 0; i--) {
           result.push(arr[i]);
           //adds otzad napred for loop into new array
       }
       console.log(result.join(' ')); 
       //add space between array elements
   }
   reverse2(3, [10, 20, 30, 40, 50]);