let titleInput = document.querySelector("#title-input");

titleInput.addEventListener("input", () => {
	document.title = titleInput.value;
});

// document.title = 