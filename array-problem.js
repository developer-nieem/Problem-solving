
// Write a JS code to print Even numbers in given array

{


    let number = [5,78,89,9,8,4,50,92,50];
    
    let eventNum = []
    for(let i = 0; i<number.length ; i++){
    
            const element = number[i]
    
            if(element % 2 == 0) {
                eventNum.push(element)
            }
    }
    // console.log(eventNum);
    
    
    }
    
    
    
    
    // Write a JS code to delete all occurrence of element in given array
    
    {
    
    
    const number = [33, 22, 55, 12, 3, 1]
    
    
    const freshNum = [];
    for(let i = 0; i<number.length ; i++){
    
                const element = number[i];
        
                if (element == 22 || element == 12) {
                        continue;
                }else{
                    freshNum.push(element)
                }
    
    }
    
    // console.log(freshNum);
    }
    
    
    
    // Write a JS code to find the power of a number using for loop
    
    
    {
    
    
        const powerOfNum = (num , power) => {
    
          
                let powerNum = 1
    
            for (let i = 1; i <= power; i++) {
    
                powerNum = powerNum * num
                
            }
    
            return powerNum
            
        }
    
    
      const result =  powerOfNum(50, 5)
      console.log(result);
    
    
    
    
    
        const num = [1,2,3,4,5,6,7,8,9];
    
        const powerNum = []
        for (let i = 0; i < num.length; i++) {
            const element = num[i];
           
            const power = element * element
    
            powerNum.push(power)
        }
    
        // console.log(powerNum);
    }
    
    // Write a JS code to find the number of digits in a number
    
    
    
    {
    
        const numberOfDigits = (num) => {
    
           const makeStr = num.toString()
        
            console.log(`${makeStr.length} Digits This Number`);
    
    
        }
    
        // numberOfDigits(546452654646)
    
    
    }
    
    
    {
    
        const countDigits = (num) => {
    
            if (num ===0) {
                console.log(1);
            }
                let count = 0;
            for (let i = num; i > 0; i = Math.floor( i / 10)) {
    
                count++
    
    
            }
    
            console.log(count);
    
        }
    
        countDigits(0)
    }
    
    
    