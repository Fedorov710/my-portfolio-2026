const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Открытие и закрытие мобильного меню
if (menuToggle && nav) {
	menuToggle.addEventListener("click", () => {
		const isOpen = nav.classList.toggle("active");

		menuToggle.setAttribute("aria-expanded", String(isOpen));
		menuToggle.setAttribute(
			"aria-label",
			isOpen ? "Закрыть меню" : "Открыть меню"
		);
		menuToggle.textContent = isOpen ? "✕" : "☰";
	});

	// Закрытие меню после перехода по ссылке
	nav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			nav.classList.remove("active");
			menuToggle.setAttribute("aria-expanded", "false");
			menuToggle.setAttribute("aria-label", "Открыть меню");
			menuToggle.textContent = "☰";
		});
	});
}

// Плавное появление элементов при прокрутке
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.12 }
	);

	sections.forEach((section) => observer.observe(section));
}
