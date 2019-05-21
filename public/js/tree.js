function Folder_Toggle(myself) {
	if (myself.nextSibling.nextSibling.nextSibling.nextSibling.style.display == "") {
		myself.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none";
		myself.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none";
		myself.src = "/image/plus.gif";
	} else {
		myself.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "";
		myself.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "";
		myself.src = "/image/minus.gif";
	}
}

