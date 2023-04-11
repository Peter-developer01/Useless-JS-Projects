let titleInput = document.querySelector("#title-input");

titleInput.addEventListener("click", () => {
	document.title = titleInput.value;
});

// document.title = 