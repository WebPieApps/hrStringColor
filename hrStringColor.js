/** 
	hrStringColor.js v1
	Uses : Apply Color on seperate characters in string
	Developed By: Md Hidaytullah Rahmani
	www.github.com/hidaytrahman
*/
$.fn.hrStringColor = function(option){
	// Custom options
	var setting = $.extend({
		string 			: 	$(this).text(),
		charFrom		:	5,  // Index of character, where to start
		charTo 			: 	25, // Index of character, where to end
		color 			:  	"green" // add your color
	},option)
	
	var str;
		str = setting.string;
		
	if(str.length<1) {
		str = "Hi my name is Hidayt Rahman, You can add your own";
	}	
	// Initialize required varibles
	var start, first, second, till, last, highlightedArea;
		till= setting.charTo;
		last = str.length;
		start = setting.charFrom;	

		// Before colorful area
		first = str.substring(0,start);
		// Colourful area
		highlightedArea = str.substring(start,till);
		// After colourfull area
		second = str.substring(till,last);

		// Print Complete String
		$(this).html(first+"<span style=color:"+setting.color+">"+highlightedArea+"</span>"+ second);
};
