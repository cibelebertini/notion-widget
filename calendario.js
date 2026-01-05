const today = new Date();
const monthYear = document.getElementById("monthYear");
const daysContainer = document.getElementById("days");

const months = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
];

monthYear.textContent = `${months[today.getMonth()]} ${today.getFullYear()}`;

const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
  daysContainer.appendChild(document.createElement("div"));
}

for (let d = 1; d <= lastDate; d++) {
  const day = document.createElement("div");
  day.textContent = d;

  if (d === today.getDate()) {
    day.classList.add("today");
  }

  daysContainer.appendChild(day);
}
