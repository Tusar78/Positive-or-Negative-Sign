//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.


function prductOf(a,b,c) {
    if((a*b*c) < 0) {
        console.log('This is a Negative Sign')
    } else {
        console.log('This is a Positive Sign')
    }
}
prductOf(10,-4,5) 