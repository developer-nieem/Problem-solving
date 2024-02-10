
// Leap Year


{

    const findLeapYear = (year) => {
            if (year % 4 ==0 || year % 100 == 0 || year % 400 == 0) {
                console.log(`${year} This year is LeapYear`);
    }else{
        console.log(`Not LeapYear`);
    }
}

// findLeapYear(2020)

}






{


    const sumOfNum = (num) => {
        let sum = 0
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10)
        }
        return sum
    }
    
    const result = sumOfNum(1067)
    console.log(result); 

}
