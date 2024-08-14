const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		if (panel.classList.contains("active")) {
			panel.classList.remove("active");
		} else {
			const panelsArray = Array.from(panels);
			panelsArray.map((panel) => {
				panel.classList.remove("active");
			});
			panel.classList.add("active");
		}
	});
});
