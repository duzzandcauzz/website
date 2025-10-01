function showPage(page) {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("redes").classList.add("hidden");

  document.getElementById(page).classList.remove("hidden");

  const buttons = document.querySelectorAll("nav button");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}
