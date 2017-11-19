$(document).ready(function() {
    
    var opt = [];
    var idx = 0;
	$("#sbmt").click(function(){
 		
 		for (var i = 1; i <= 3; i++){
 			console.log($("#op" + i).val());
 			if ($("#op" + i).val().length != 0){
 				opt[idx] = $("#op" + i).val(); 
 				idx++;
 			} 
 		}

 		var result = getRandomOp(opt.length-1);
 		console.log(result);

 		$("#result").text(opt[result] + " is chosen!");

 		// Reset
 		opt = [];
		idx = 0;
	});
});


function getRandomOp(maxRange){
	var min = Math.ceil(0); 
	var max = Math.floor(maxRange); 
	return Math.floor(Math.random() *(max -min +1)) + min; 
}
