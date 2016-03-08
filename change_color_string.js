/** Set Color in seperate characters in string
	Developed By: Md Hidaytullah Rahmani
	www.webtechpie.com
*/
$.fn.hrStringColor = function(option){

	//Some options
	var setting = $.extend({
		string 			: 	 "Hi i am Hidayt Rahman. You can add your own",
		charNumber 		: 	 10, //Add number of characters which you want to color
		color 			:  	 "green" // add your color

	},option)


	var str,till,first,second,last;
	str = setting.string;
	till= setting.charNumber;
	last = str.length;
	first = str.substring(0,till);

	second = str.substring(till,last);

	//Print data
	$(this).html("<span style=color:"+setting.color+">"+first+"</span>"+ second);

	
}
