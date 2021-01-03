function swap(arr) {

    let lastIndex = arr.length - 1;
    // zapazvame stoinostta v edna promenliva

    // vzimame stoinostta ot masiva
    // razmenqmae stoinostta s ogledalnata
    for (let i = 0; i < arr.length / 2; i++) {
        //taka minava samo do polovinata i prekusva predi sredata

        // zapazvame stoinostta v stranichna promenliva
        let temp = arr[i];
        // namirame razstoqnieto do simetralata
        //i = distance from start
        //length-1-i = distance from end

        // opredelqme ogledaniq index
        // zapisvame stoinostta na ogledalniq 
        arr[i] = arr[lastIndex - i];

        // zapisvame stoinostta ot vunshnata na mqstoto na ogledalniq
        arr[lastIndex - i] = temp
    }
    console.log(arr.join(' '));
}
swap(['a', 'b', 'c', 'd', 'e']);