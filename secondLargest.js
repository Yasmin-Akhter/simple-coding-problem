function getSecondLargest(numbers) {
    let largest = numbers[0];
    let secondlargest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            secondlargest = largest;
            largest = element;

        }
        else if (element > secondlargest) {
            secondlargest = element;
        }

    }
    console.log(secondlargest);

}
/*  let largestsecond = getSecondLargest[12, 23, 43, 65, 14, 10, 19];
 console.log(largestsecond); */
getSecondLargest([12, 23, 43, 65, 14, 10, 19]);