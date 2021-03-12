function viewimgFull(element) {
	var src = element.src;
	$("#imgFull").attr("src", src);
	$("#imgSmall").css("display", "none");
	$("#container").css("display", "block");
}

function goback() {
	$("#container").css("display", "none");
	$("#imgSmall").css("display", "inline");
}