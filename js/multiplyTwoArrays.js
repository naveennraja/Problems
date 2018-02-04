/**
 * Write a function to multiply two arrays of numbers . If 2 array has different length do not multiply return the number
 */
function multiplyTwoArray(a1, a2) 
{
    let longArr  = a2,
        shortArr = a1;
    if(a1.length > a2.length) {
        longArr = a1;
        shortArr = a2;
    }

    return longArr.map((value, index) => 
    {
        if(typeof shortArr[index] !== 'undefined') 
            return value * shortArr[index];
        return value;
    });
}
