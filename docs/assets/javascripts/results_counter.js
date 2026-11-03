document.addEventListener("DOMContentLoaded", () => {
    const count = document.querySelectorAll(".publication-card").length;
    document.getElementById("publication-count").textContent = count;
});

const departmentCount = document.querySelectorAll(
    ".department-grid td"
).length;

document.getElementById("department-count").textContent = departmentCount;

document.addEventListener("DOMContentLoaded", () => {
    const publicationCards = document.querySelectorAll(".publication-card");

    // Publication count
    document.getElementById("publication-count").textContent =
        publicationCards.length;

    // Department count
    document.getElementById("department-count").textContent =
        document.querySelectorAll(".department-grid td").length;

    // Year range
    const years = [...publicationCards]
        .map(card => {
            const match = card.textContent.match(/\b(20\d{2})\b/);
            return match ? Number(match[1]) : null;
        })
        .filter(year => year !== null);

    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    document.getElementById("publication-years").textContent =
        minYear === maxYear ? minYear : `${minYear}–${maxYear}`;
});