/*
Write a recursive function for the countDown in javascript
*/

var countDown = (val) => {
    if (val > 0) {
        console.log(val);
        return countdown(val - 1);
    } else {
        return val;
    }
};
countDown(10);