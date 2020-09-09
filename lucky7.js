let number = [2, 5, 3, 3, 2, 2, 4, 3, 3]
function luckySevens(number){
    console.log('number :>> ', number);
    for (let i = 0; i < number.length - 2; i++) {
        console.log('i :>> ', i);
    console.log('number[i] + number[i+1] + number[i+2]', number[i] + number[i+1] + number[i+2]);
    if (number[i] + number[i+1] + number[i+2] == 7)
        return true
    }
}
console.log('luckySevens :>> ', luckySevens(number)); 