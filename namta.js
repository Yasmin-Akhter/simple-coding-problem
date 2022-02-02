function multiplicationTable(m) {
    result = 1;
    for (i = 1; i <= 10; i++) {


        result = m * i;
        console.log(m, "*", i, "=", result);
    }
}
let number = 13;
multiplicationTable(number);