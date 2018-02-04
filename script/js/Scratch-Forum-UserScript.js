(function() {
	'use strict';

	console.clear();

	var Update = {hour:"02:00", date:"04-02-2018"};
	console.info("[INFO] Scratch-Forum-UserScript par Smrman | update " + Update.date + " " + Update.hour + " GMT+1");
	var URLHelp = "https://smrman.github.io/Scratch-Forum-UserScript/html/contact.html";
	console.warn("[HELP] Help is avaliable for the Scratch Userscript on " + URLHelp);

	var URL = window.location.href.split("/");

	console.log("[INFO] You are currently on page " + URL[4] + '/' + URL[5]);

	//Adds the "Discuss" button to the header
	document.getElementsByTagName("li")[3].innerHTML = '<a href="/discuss">Discuter</a>';

	switch (URL[4]) {
		case "discuss": //On forum
			switch (URL[5]) {
				case "topic": //Discussion page
					console.log('[INFO] Activating "Discuss" features');
					if (document.getElementsByTagName("textarea").length > 0){ //textbox input detected
						BoutonsForum("id_body",20,22);
					}
					else {
						console.log('[INFO] No reply zone detected. Topic closed.');
					}
					break;
				case "settings": //Changing signature
					console.log('[INFO] Activating "Signature" features');
					BoutonsForum("id_signature",20,22);
					break;
				case "post": //Modifying a post
					console.log('[INFO] Activating "Editing" features');
					BoutonsForum("id_signature",20,22);
					break;
				default:
					console.log('[INFO] On a "Discuss" page, but no feature to enable.');
			}
			break;
		case "accounts": //On account page
			switch (URL[5]) { //In accoutn settings
				case "settings":
					console.log('[INFO] Activating "Settings" features');
					break;
				default:
					console.log('[INFO] On a "Account" page, but no feature to enable.');
			}
			break;
		case "search": //On a search page
			AdvancedSearch();
			break;
		default: //No special page
			console.log('[INFO] No special page dected.');
	}
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
})();
