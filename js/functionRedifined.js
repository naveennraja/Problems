/* 
	Write the function which redefines itself. 
	Calling the function for the first time should print FIRST NAME 
	Calling the same function should return output LAST NAME 
*/
function callName()
{
	var 	firstName="Naveen";
	console.log("First Name :",firstName);
	 callName = () =>  
	{
		var lastName= "Raja";
		console.log("Last Name :",lastName);
	}
}