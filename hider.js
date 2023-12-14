function hide(id) {
	var elements = id.split('|');
	var elementId;
	for (elementId of elements) {
		var element = document.getElementById(elementId);
		if (element != null && element != 'undefined') {
			if (element.style.display == '') {
				console.log("---");
				element.style.display = "none";
			} else {
				console.log("none");
				element.style.display = "";
			}
		}
	}

}


//replace
//https://www.google.com/url?q=https://awwabsiddiqui.github.io/pdfresume/Awwab%2520Resume.pdf&amp;sa=D&amp;source=editors&amp;ust=1702568186402494&amp;usg=AOvVaw2TviLnXJ67e1hqht6JKckR
//with
//Awwab Resume.pdf