let a = 24;
let b = 27;
let c = 44;
if (a < b) {
    if (a < c) {
        console.log(a, "is the smallest number");
    }
    else {
        if (b < c) {
            console.log(b, "is the smallest number");

        }
        else {
            console.log(c, " is the smallest number");
        }
    }
}