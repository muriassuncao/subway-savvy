var singleRide;
var monthlyCard;


function calculate(){
	singleRide = document.getElementById("subway").value;
	monthlyCard = singleRide * 4;
	alert("You ride "+
	monthlyCard+
	" times per month");
	shouldYou();
}
	
	function shouldYou(){
		if (monthlyCard > 46){
			alert("Be Subway Savvy and buy a monthly MetroCard!");
		}
		else { 
			alert("Be Subway Savvy and buy a pay-per-ride card!")
	}


}

