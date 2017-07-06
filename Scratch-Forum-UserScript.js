(function() {
    'use strict';
	console.clear();
	var UpdateHour = "19:00";
	var UpdateDate = "23-06-2017";
    console.info("[INFO] Scratch-Forum-UserScript by Smrman | update " + UpdateDate + " " + UpdateHour + " GMT+1");
	// Déclaration variables
	var range;
	var sel;
	var AscorLogo;
	var AscorListe;
	var AscorPlace;
	var CouleurTexte;
	var CouleurCode;
	var CouleurListe;
	var CouleurPlace;
	var AscorURLLogo = 'http://i.cubeupload.com/hJNna8.png';
	var URLHelp = "https://smrman.github.io/Scratch-Forum-UserScript/contact.html";
	var URLTopic = "https://scratch.mit.edu/discuss/topic/";
	var URLSignature = "https://scratch.mit.edu/discuss/settings/";
	var URLModify = "https://scratch.mit.edu/discuss/post/";
	var URLSettings = "https://scratch.mit.edu/accounts/settings/";
	var URLCourt = "";
    	var URLPosition = 0;
    	var URLLong = window.location.href;
	var URLSlashCount = 0;
	do {
    	while (URLLong.charAt(URLPosition) != "/" && URLPosition < URLLong.length){
			URLCourt = URLCourt + URLLong.charAt(URLPosition);
			URLPosition = URLPosition + 1;
		}
		URLCourt = URLCourt + URLLong.charAt(URLPosition);
		URLPosition = URLPosition + 1;
        URLSlashCount = URLSlashCount + 1;
    } while (URLSlashCount < 5 && URLPosition < URLLong.length);
    console.log("[INFO] You are currently on page " + URLCourt);
	if (URLCourt == URLTopic){
    	console.log('[INFO] Activating "Discuss" features');
		if (document.getElementsByTagName("textarea").length > 0){
		AffichageTout("id_body",20,22);
		}
		else {
			console.log('[INFO] No reply zone detected. Topic closed.');
		}
    }
	if (URLCourt == URLSignature){
		console.log('[INFO] Activating "Signature" features');
		AffichageTout("id_signature",20,22);
	}
	if (URLCourt == URLModify){
		console.log('[INFO] Activating "Editing" features');
		AffichageTout("id_signature",20,22);
	}
    if (URLCourt== URLSettings){
    	console.log('[INFO] Activating "Settings" features');
	/*
	var form = document.createElement("form");
	form.className = "switch";
	form.id = "switchid";
	document.getElementById("main-content").appendChild(form);
	var label = document.createElement("label");
	label.innerHTML = "<hr><h3>Paramètres de l'extension Scratch-Forum-UserScript</h3><br>Lecture automatique des projets dans la recherche activée (nécessite un ordinateur costaud)";
	document.getElementById("switchid").appendChild(label);
	var input = document.createElement("input");
	input.type = "checkbox";
	input.id = "inputid";
	document.getElementById("switchid").appendChild(input);
	*/
    }
	function AffichageTout(TagId,AscorPosition,CouleurPosition) {
				// == Ascor Logo ==
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
	document.getElementsByTagName("li")[3].innerHTML = '<a href="/discuss">Discussion</a>';
    	console.warn("[HELP] Help is avaliable for the Scratch Userscript on" + URLHelp);
})();
