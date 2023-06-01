const generateAdvise = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviseContainer.textContent = `"${data.slip.advice}"`;
      idCOntainer.textContent = data.slip.id;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const adviseContainer = document.querySelector("[data-advise]");
const idCOntainer = document.querySelector("[data-number]");
const card = document.querySelector(".card");
window.onload = () => {
  generateAdvise();
  card.classList.remove("hidden");
};
document.querySelector("[data-generate").addEventListener("click", (event) => {
  card.classList.add("hidden");
  setTimeout(() => {
    generateAdvise();
    card.classList.remove("hidden");
  }, 300);
});
