/* function largestValueOfArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;

        }


    }
    return largest;
}
let result = largestValueOfArray([12, 15, 10, 11, 18, 09, 90, 27]);
console.log(result); */


let nums = [12, 15, 10, 11, 18, 09, 90, 27];
let largestValue = Math.max(12, 15, 10, 11, 18, 09, 90, 27);
console.log(largestValue);
