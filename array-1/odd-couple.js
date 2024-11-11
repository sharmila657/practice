function oddCouple(numbers){
    let oddNumbers = [];
    for(let i = 0; i< numbers.length; i++){
        let num = numbers[i];
        if(num % 2 !== 0){
            oddNumbers.push(num);
        }
    }
    return oddNumbers;
}
console.log(oddCouple([1, 2 , 3, 4]))