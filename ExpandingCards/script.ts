let cards = document.querySelectorAll<HTMLDivElement>(".card");
let activeCard = document.querySelector<HTMLDivElement>(".active")!;

cards.forEach((card: HTMLDivElement) => {
	card.addEventListener("click", () => {
		activeCard.classList.remove("active");
		card.classList.add("active");
		activeCard = card;
	});
});
