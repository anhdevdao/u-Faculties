function Folder_Toggle(myself) {
	if (myself.nextSibling.nextSibling.nextSibling.nextSibling.style.display == "") {
		myself.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none";
		myself.src = "public/image/plus.gif";
	} else {
		myself.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "";
		myself.src = "public/image/minus.gif";
	}
}