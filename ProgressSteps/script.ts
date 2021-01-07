let circles = document.querySelectorAll(".circle");
let progressBar = document.querySelector<HTMLDivElement>("#progress-bar")!;
let prevBtn = document.querySelector<HTMLButtonElement>("#prev")!;
let nextBtn = document.querySelector<HTMLButtonElement>("#next")!;

let currentProgress = 1;

const updateProgress = () => {
	circles.forEach((circle, index) => {
		if (index < currentProgress) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	if (currentProgress === 4) {
		nextBtn.classList.add("disabled");
		nextBtn.disabled = true;
	} else if (currentProgress === 1) {
		prevBtn.classList.add("disabled");
		prevBtn.disabled = true;
	} else {
		nextBtn.classList.remove("disabled");
		prevBtn.classList.remove("disabled");
		nextBtn.disabled = false;
		prevBtn.disabled = false;
	}

	const actives = document.querySelectorAll(".active");

	progressBar.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + "%";
};

prevBtn.addEventListener("click", () => {
	if (currentProgress > 1) {
		currentProgress--;
		updateProgress();
	}
});

nextBtn.addEventListener("click", () => {
	if (currentProgress < circles.length) {
		currentProgress++;
		updateProgress();
	}
});
