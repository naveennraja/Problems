/*Find a number in the string in javascript
*/
var getNumber = (str) =>
{
	let num = str.match(/\d/g).join("");
	console.log(num);
}
getNumber("abdcdac,ajsdb;ad,s,a[d,name-1234-!@#$%^&*(:1234567890987654321");
// Output 12341234567890987654321


