let cards = document.querySelectorAll(".card");
let activeCard = document.querySelector(".active");

cards.forEach((card) => {
	card.addEventListener("click", () => {
		activeCard.classList.remove("active");
		card.classList.add("active");
		activeCard = card;
	});
});
