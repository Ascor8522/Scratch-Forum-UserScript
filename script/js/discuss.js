//variables
var AscorLogo;
var AscorListe;
var AscorPlace;
var CouleurTexte;
var CouleurCode;
var CouleurListe;
var CouleurPlace;
var range;
var sel;
var AscorURLLogo = 'http://i.cubeupload.com/hJNna8.png';

function BoutonsForum(TagId,AscorPosition,CouleurPosition) {
	console.log("Discuss.js running");
	//Ascor Logo
	AscorLogo = document.createElement("Div");
	AscorLogo.style.height = "15px";
	AscorLogo.style.width = "15px";
	AscorLogo.style.border = "black";
	AscorLogo.style.borderWidth = "1px";
	AscorLogo.style.borderStyle = "solid";
	AscorLogo.style.marginLeft = "5px";
	AscorLogo.style.background = "url(http://i.cubeupload.com/hJNna8.png)";
	AscorLogo.style.backgroundRepeat = "no-repeat";
	AscorLogo.style.textDecoration = "none";
	AscorLogo.style.color = "black";
	AscorLogo.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
	AscorLogo.style.fontSize = "13px";
	AscorLogo.id = "nouveaubouton";
	AscorLogo.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ascor";
	AscorListe = document.createElement("Li");
	AscorListe.appendChild(AscorLogo);
	AscorListe.style.cursor = "pointer";
	AscorListe.title = "Logo Ascor";
	AscorListe.onclick = function() {
		document.getElementById(TagId).focus();
		if(window.getSelection().rangeCount === "0") {
			sel = window.getSelection()[0];
			range = sel.getRangeAt(0);
			range.deleteContents();
			range.insertNode(document.createTextNode(sel + "[img]" + AscorURLLogo + "[/img]"));
			//document.getElementById('id_signature').value = document.getElementById("id_signature").value + AscorURLLogo;
		}
		else {
			document.getElementById(TagId).value = AscorURLLogo;
		}
	};
	AscorPlace = document.getElementsByTagName("ul").length - AscorPosition;
	document.getElementsByTagName("ul")[AscorPlace].appendChild(AscorListe);

	// == Colored text ==
	CouleurTexte = document.createElement("Div");
	CouleurTexte.style.height = "15px";
	CouleurTexte.style.width = "15px";
	CouleurTexte.style.border = "black";
	CouleurTexte.style.borderWidth = "1px";
	CouleurTexte.style.borderStyle = "solid";
	CouleurTexte.style.marginLeft = "5px";
	CouleurTexte.style.backgroundColor = "orange";
	CouleurTexte.style.backgroundRepeat = "no-repeat";
	CouleurTexte.style.textDecoration = "none";
	CouleurTexte.style.color = "black";
	CouleurTexte.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
	CouleurTexte.style.fontSize = "13px";
	CouleurTexte.id = "boutoncouleur";
	CouleurTexte.innerHTML = "T";
	CouleurTexte.style.textAlign = "center";
	CouleurTexte.style.textShadow = "none";
	CouleurCode = "[color=orange][/color]";
	CouleurListe = document.createElement("Li");
	CouleurListe.appendChild(CouleurTexte);
	CouleurListe.style.cursor = "pointer";
	CouleurListe.title = "Texte Orange";
	CouleurListe.onclick = function() {
		document.getElementById(TagId).focus();
		if(window.getSelection().rangeCount === "0") {
			sel = window.getSelection()[0];
			range = sel.getRangeAt(0);
			range.deleteContents();
			range.insertNode(document.createTextNode(sel + CouleurCode));
			//document.getElementById('id_signature').value = document.getElementById("id_signature").value + CouleurCode;
		}
		else {
			document.getElementById(TagId).value = CouleurCode;
		}
	};
	CouleurPlace = document.getElementsByTagName("ul").length - CouleurPosition;
	document.getElementsByTagName("ul")[CouleurPlace].appendChild(CouleurListe);
}
