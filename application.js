function myFunction(){
	var fnum = document.getElementById("fnum");
	var snum = document.getElementById("snum");
	var tnum = document.getElementById("tnum");
	var output = document.getElementById("output");

	for(var i = fnum.value; i <= snum.value; i++){
		if(i % tnum.value == 0){
			output.innerHTML += "<div>" + i + "</div>";
		}
	}
}