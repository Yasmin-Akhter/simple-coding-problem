function smallestValueOfArray(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;

        }


    }
    return smallest;
}
let result = smallestValueOfArray([12, 15, 10, 11, 18, 09, 90, 27]);
console.log(result);


let nums = [12, 15, 10, 11, 18, 09, 90, 27];
let smallestValue = Math.min(12, 15, 10, 11, 18, 09, 90, 27);
console.log(smallestValue); 
