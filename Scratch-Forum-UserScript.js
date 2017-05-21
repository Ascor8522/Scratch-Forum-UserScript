(function() {
    'use strict';
    var urllong = window.location.href;
    var urlcourt = "";
    var position = 0;
    var i = 0;
    while (i<5 && position < urllong.length){
    	while (urllong.charAt(position) != "/"){
			urlcourt = urlcourt + urllong.charAt(position);
			position ++;
		}
		urlcourt = urlcourt + urllong.charAt(position);
		position ++;
        i = i + 1;
    }
    if (urlcourt=="https://scratch.mit.edu/discuss/topic/"){
		var range, sel;
		// == Ascor Logo ==
		var logoAscor = document.createElement("Div");
		logoAscor.style.height = "15px";
		logoAscor.style.width = "15px";
		logoAscor.style.border = "black";
		logoAscor.style.borderWidth = "1px";
		logoAscor.style.borderStyle = "solid";
		logoAscor.style.marginLeft = "5px";
		logoAscor.style.backgroundImage = 'url("https://raw.githubusercontent.com/Smrman/Scratch-Forum-UserScript/master/Ascor%20logo.png")';
		logoAscor.style.backgroundRepeat = "no-repeat";
		logoAscor.style.textDecoration = "none";
		logoAscor.style.color = "black";
		logoAscor.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
		logoAscor.style.fontSize = "13px";
		logoAscor.id = "nouveaubouton";
		logoAscor.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ascor";
		var lienimageascor = '[img]http://i.cubeupload.com/hJNna8.png[/img]';
		var listascor = document.createElement("Li");
		listascor.appendChild(logoAscor);
		listascor.style.cursor = "pointer";
		listascor.title = "Logo Ascor";
		listascor.onclick = function() {
			document.getElementById("id_body").focus();
			if(window.getSelection().rangeCount === "0") {
				sel = window.getSelection()[0];
				range = sel.getRangeAt(0);
				range.deleteContents();
				range.insertNode(document.createTextNode(sel + lienimageascor));
				//document.getElementById('id_body').value = document.getElementById("id_body").value + lienimageascor;
			}
			else {
				document.getElementById('id_body').value = lienimageascor;
			}
		};
		var placeascor = document.getElementsByTagName("ul").length - 20;
		document.getElementsByTagName("ul")[placeascor].appendChild(listascor);

		// == Colored text ==
		var textcolor = document.createElement("Div");
		textcolor.style.height = "15px";
		textcolor.style.width = "15px";
		textcolor.style.border = "black";
		textcolor.style.borderWidth = "1px";
		textcolor.style.borderStyle = "solid";
		textcolor.style.marginLeft = "5px";
		textcolor.style.backgroundColor = "orange";
		textcolor.style.backgroundRepeat = "no-repeat";
		textcolor.style.textDecoration = "none";
		textcolor.style.color = "black";
		textcolor.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
		textcolor.style.fontSize = "13px";
		textcolor.id = "boutoncouleur";
		textcolor.innerHTML = "T";
		textcolor.style.textShadow = "none";
		var codecouleur = '[color=orange][/color]';
		var listecouleur = document.createElement("Li");
		listecouleur.appendChild(textcolor);
		listecouleur.style.cursor = "pointer";
		listecouleur.title = "Texte Orange";
		listecouleur.onclick = function() {
			document.getElementById("id_body").focus();
			if(window.getSelection().rangeCount === "0") {
				sel = window.getSelection()[0];
				range = sel.getRangeAt(0);
				range.deleteContents();
				range.insertNode(document.createTextNode(sel + codecouleur));
				//document.getElementById('id_body').value = document.getElementById("id_body").value + codecouleur;
			}
			else {
				document.getElementById('id_body').value = codecouleur;
			}
		};
		var placecouleur = document.getElementsByTagName("ul").length - 22;
		document.getElementsByTagName("ul")[placecouleur].appendChild(listecouleur);
    }
	
    if (urlcourt=="https://scratch.mit.edu/accounts/settings/"){
		
    }
})();
