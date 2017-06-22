// ==UserScript==
// @name         Test script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://scratch.mit.edu/*
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	console.clear();
	var UpdateHour = "17:00";
	var UpdateDate = "22-06-2017";
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
	var URLSettings = "https://scratch.mit.edu/accounts/settings/";
	var URLCourt = "";
    var URLPosition = 0;
    var URLLong = window.location.href;
	var URLSlashCount = 0;
	
	// Déterminer page en cours
	
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
    
	// Si sur page "Topic"
	
	if (URLCourt == URLTopic && document.getElementsByTagName("textarea").length > 0){
    	console.log('[INFO] Activating "Discuss" features');
		
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
			document.getElementById("id_body").focus();
			if(window.getSelection().rangeCount === "0") {
				sel = window.getSelection()[0];
				range = sel.getRangeAt(0);
				range.deleteContents();
				range.insertNode(document.createTextNode(sel + '[img]' + AscorURLLogo + '[/img]'));
				//document.getElementById('id_body').value = document.getElementById("id_body").value + AscorURLLogo;
			}
			else {
				document.getElementById('id_body').value = AscorURLLogo;
			}
		};
		AscorPlace = document.getElementsByTagName("ul").length - 20;
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
		CouleurCode = '[color=orange][/color]';
		CouleurListe = document.createElement("Li");
		CouleurListe.appendChild(CouleurTexte);
		CouleurListe.style.cursor = "pointer";
		CouleurListe.title = "Texte Orange";
		CouleurListe.onclick = function() {
			document.getElementById("id_body").focus();
			if(window.getSelection().rangeCount === "0") {
				sel = window.getSelection()[0];
				range = sel.getRangeAt(0);
				range.deleteContents();
				range.insertNode(document.createTextNode(sel + CouleurCode));
				//document.getElementById('id_body').value = document.getElementById("id_body").value + CouleurCode;
			}
			else {
				document.getElementById('id_body').value = CouleurCode;
			}
		};
		CouleurPlace = document.getElementsByTagName("ul").length - 22;
		document.getElementsByTagName("ul")[CouleurPlace].appendChild(CouleurListe);
    }
	else {
		console.log('[INFO] No reply zone detected. Topic closed.');
	}

	if (URLCourt == URLSignature){
		console.log('[INFO] Activating "Signature" features');
		// == Ascor Logo ==
		AscorLogo = document.createElement("Div");
		AscorLogo.style.height = "15px";
		AscorLogo.style.width = "15px";
		AscorLogo.style.border = "black";
		AscorLogo.style.borderWidth = "1px";
		AscorLogo.style.borderStyle = "solid";
		AscorLogo.style.marginLeft = "5px";
		//AscorLogo.style.backgroundImage = 'url(http://i.cubeupload.com/hJNna8.png)';
		AscorLogo.style.backgroundImage = AscorURLLogo;
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
			document.getElementById("id_signature").focus();
			if(window.getSelection().rangeCount === "0") {
				sel = window.getSelection()[0];
				range = sel.getRangeAt(0);
				range.deleteContents();
				range.insertNode(document.createTextNode(sel + "[img]" + AscorURLLogo + "[/img]"));
				//document.getElementById('id_signature').value = document.getElementById("id_signature").value + AscorURLLogo;
			}
			else {
				document.getElementById('id_signature').value = AscorURLLogo;
			}
		};
		AscorPlace = document.getElementsByTagName("ul").length - 20;
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
			document.getElementById("id_signature").focus();
			if(window.getSelection().rangeCount === "0") {
				sel = window.getSelection()[0];
				range = sel.getRangeAt(0);
				range.deleteContents();
				range.insertNode(document.createTextNode(sel + CouleurCode));
				//document.getElementById('id_signature').value = document.getElementById("id_signature").value + CouleurCode;
			}
			else {
				document.getElementById('id_signature').value = CouleurCode;
			}
		};
		CouleurPlace = document.getElementsByTagName("ul").length - 22;
		document.getElementsByTagName("ul")[CouleurPlace].appendChild(CouleurListe);
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
    console.warn("[HELP] Help is avaliable for the Scratch Userscript on" + URLHelp);
})();
