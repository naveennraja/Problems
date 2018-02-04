/**
 *Examples of currying 
**/

var message = function(msg) {
  return (nextMsg) => {
    console.log(msg + ", " + nextMsg);
  };
};
var msg = message("Hi");
//message("Have a Great Day Ahead !!");
message("Practise!!!")("To learn more!");
// Output : Hi, Have a Great Day Ahead !!
// Output : Practise!!!, To learn more!

/*Simple addition */
function add(a)
{
	return (b) => {
		return a+b;
	}
}