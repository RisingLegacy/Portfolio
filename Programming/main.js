const secret = document.querySelector(".secret");
const theme = document.querySelector(".theme");

function changeTheme() {
  const container = document.querySelector(".container");
  container.style.backgroundColor = "#333";

  const text = document.querySelectorAll(".container p");
  text[0].style.color = "white";
  text[1].style.color = "white";
  text[2].style.color = "white";

  const projects = document.querySelector(".projects");
  projects.style.backgroundColor = "#333";

  const projectHead = document.querySelector("#project-head");
  projectHead.style.color = "white";
}

theme.onclick = changeTheme;

function nyanCats() {
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "block";
}

secret.onclick = nyanCats;
