(function() {
	'use strict';
	console.clear();
	var UpdateHour = "12:30";
	var UpdateDate = "26-07-2017";
	console.info("[INFO] Scratch-Forum-UserScript by Smrman | update " + UpdateDate + " " + UpdateHour + " GMT+1");
	//variables
	var AscorURLLogo = 'http://i.cubeupload.com/hJNna8.png';
	var URLHelp = "https://smrman.github.io/Scratch-Forum-UserScript/contact.html";
	var URLTopic = "https://scratch.mit.edu/discuss/topic/";
	var URLSignature = "https://scratch.mit.edu/discuss/settings/";
	var URLModify = "https://scratch.mit.edu/discuss/post/";
	var URLSettings = "https://scratch.mit.edu/accounts/settings/";
	var UserIcon = "https://smrman.github.io/Scratch-Forum-UserScript/assets/img/icon%20inactive.svg";
	var UserIcon2 = "https://smrman.github.io/Scratch-Forum-UserScript/assets/img/icon%20active.svg";
	var URLSearch1 = "https://scratch.mit.edu/search/projects/";
	var URLSearch2 = "https://scratch.mit.edu/search/studios/";
	var URL = window.location.href;
	var URLCourt = "";
	var URLPosition = 0;
	var URLSlashCount = 0;
	var Parametre = "non";
	var i = 0;
	var URLParameterLocation = 0;
	var URLParameterLength = 0;
	var URLParameter = "";
	//controle de la page

	while (Parametre == "non" && i<URL.length) {
		if (window.location.href.charAt(i) == "?") {
			Parametre = "oui";
			break;
		}
		else {
			Parametre = "non";
		}
		i = i + 1;
	}
	if (Parametre == "oui") {
		URLParameterLocation = i;
		URLParameterLength = window.location.href.length - URLParameterLocation;
		while (i < window.location.href.length) {
			URLParameter = URLParameter + window.location.href.charAt(i + 3);
			i = i + 1;
		}
		for (i=0; i < URLParameterLocation; i++) {
			URLCourt = URLCourt + window.location.href.charAt(i);
		}
		if ((URLCourt.charAt(URLCourt.length-1)) != "/") {
			URLCourt = URLCourt + "/";
			window.location.href = URLCourt + "?q=" + URLParameter;
		}
	}
	URLPosition = 0;
	URLCourt = "";
	do {
		while (URL.charAt(URLPosition) != "/" && URLPosition < URL.length){
			URLCourt = URLCourt + URL.charAt(URLPosition);
			URLPosition = URLPosition + 1;
		}
		URLCourt = URLCourt + URL.charAt(URLPosition);
		URLPosition = URLPosition + 1;
		URLSlashCount = URLSlashCount + 1;
	} while (URLSlashCount < 5 && URLPosition < URL.length);

	console.log("[INFO] You are currently on page " + URLCourt);

	//Topic
	if (URLCourt == URLTopic){
		console.log('[INFO] Activating "Discuss" features');
		if (document.getElementsByTagName("textarea").length > 0){
		BoutonsForum("id_body",20,22);
		}
		else {
			console.log('[INFO] No reply zone detected. Topic closed.');
		}
	}

	//Modifier signature
	if (URLCourt == URLSignature){
		console.log('[INFO] Activating "Signature" features');
		BoutonsForum("id_signature",20,22);
	}

	//Modifier message
	if (URLCourt == URLModify){
		console.log('[INFO] Activating "Editing" features');
		BoutonsForum("id_signature",20,22);
	}

	//Parametres custom
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

	//modifier forum
	function BoutonsForum(TagId,AscorPosition,CouleurPosition) {
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

	//chercher
	if (URLCourt == URLSearch1 || URLCourt == URLSearch2){
		console.log('[INFO] Activating "Search" features');
		var imagesearch = document.createElement("img");
		var spansearch = document.createElement("span");
		var listesearch = document.createElement("li");
		var asearch = document.createElement("a");
		imagesearch.src = UserIcon;
		imagesearch.className = "tab-icon studios";
		imagesearch.style.width = "23px";
		imagesearch.id = "imagesearch";
		spansearch.innerHTML = "Les Utilisateurs";
		spansearch.id = "spansearch";
		listesearch.id = "listesearch";
		asearch.id = "asearch";
		asearch.onclick = function() {
			document.getElementsByClassName("active")[0].className = "";
			document.getElementById("listesearch").className = "active";
			document.getElementById("imagesearch").src = UserIcon2;
			document.getElementsByClassName("tab-icon studios")[0].src = "https://smrman.github.io/Scratch-Forum-UserScript/assets/img/studios-inactive.svg";
			document.getElementsByClassName("tab-icon projects")[0].src = "https://smrman.github.io/Scratch-Forum-UserScript/assets/img/projects-inactive.svg";
			document.getElementsByClassName("grid")[0].innerHTML = "Un peu de patience, en attente des résultats...";
		};
		document.getElementsByClassName("sub-nav tabs")[0].appendChild(asearch);
		document.getElementById("asearch").appendChild(listesearch);
		document.getElementById("listesearch").appendChild(imagesearch);
		document.getElementById("listesearch").appendChild(spansearch);
		document.getElementsByClassName("title-banner-h1")[0].innerHTML = "<span>Résultats de la recherche</span>";
	}

	//remplacementdu bouton à propos par discuter
	document.getElementsByTagName("li")[3].innerHTML = '<a href="/discuss">Discuter</a>';

	//message d'aide
	console.warn("[HELP] Help is avaliable for the Scratch Userscript on " + URLHelp);
})();
