const isPrime =(n) => {
    for(let i = 2; i <=  Math.round (n ** 0.5); i++){
        if(n % i == 0) return false
    } return true
}


const largest = n => {
    if (n < 1 || typeof n !='number') return false
    let i = (10 ** n) - 1
    while (!isPrime(i))
        i--
    return i
}
