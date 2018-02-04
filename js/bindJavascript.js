/**
 * Binding example with javascript
 * 
 */
 
/*Binding the value for the */
var mod = 
	{
	  val : 2,
	  getModVal: function() 
	  {
	    return this.val;
	  }
	},
	modA = 
	{
	  val : 4,
	  getModVal: function() 
	  {
	    return this.val;
	  }
	}
var modY = mod.getModVal;
// Function gets invoked at the global scope and the output will be undefined. So we have to bind with the value 
var modX = modY.bind(mod);
//var modX = modY.bind(modA);
console.log(modX);