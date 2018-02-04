function AdvancedSearch(){
	console.log('[INFO] Activating "Search" features');
	var imagesearch = document.createElement("img");
	var spansearch = document.createElement("span");
	var listesearch = document.createElement("li");
	var asearch = document.createElement("a");
	var UserIcon = "https://smrman.github.io/Scratch-Forum-UserScript/script/assets/icon%20inactive.svg";
	var UserIcon2 = "https://smrman.github.io/Scratch-Forum-UserScript/script/assets/icon%20active.svg";
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
