{
    const reverseNum = (num) => {

        let reverse = 0;
        while(num){
                let reminder = num % 10

                reverse = reverse * 10 + reminder;
                 num  =   Math.floor(num / 10)
        }

        console.log(reverse);
    }


    reverseNum(1234)
}