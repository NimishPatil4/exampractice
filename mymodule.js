

exports.myprime=function(n){
    const number = n;
    let isPrime = true;
    
    // check if number is equal to 1
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    
    // check if number is greater than 1
    else if (number > 1) {
    
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            return(`${number} is a prime number`);
        } else {
           return(`${number} is a not prime number`);
        }
    }
    
    // check if number is less than 1
    else {
        return("The number is not a prime number.");
    }
}