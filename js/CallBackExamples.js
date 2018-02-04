/*
Write a simple Callbacks example . Make sure your function accepts a callback as a function
*/

function empDetails(firstName,lastName,callback)
{
	console.log("First Name: "+firstName+" Last Name: "+lastName);
	if(callback && typeof(callback) === "function")
		callback();
		
empDetails("Naveen","Raja",function()
{
	console.log("This is function will be called only after the name has been displayed");
	
});

