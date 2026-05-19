const laptop = document.getElementById("laptop");
laptop.addEventListener("mouseover", () => {
  laptop.style.cursor = "pointer";
});
laptop.addEventListener("click", () => {
  window.location.href = "/laptop-section.html";
});
const desktop = document.querySelectorAll("#work");
desktop.forEach((des) =>
  des.addEventListener("click", () => {
    window.location.href = "/workstation-section.html";
  }),
);
desktop.forEach((des) =>
  des.addEventListener("mouseover", () => {
    des.style.cursor = "pointer";
  }),
);
const container_bar = document.querySelectorAll(".metric");
container_bar.forEach((container) =>
  container.addEventListener("mouseover", () =>
    document
      .querySelectorAll(`.bar`)
      .forEach((bar) => bar.setAttribute("style", "--w:100%")),
  ),
);
container_bar.forEach((container) =>
  container.addEventListener("mouseout", () =>
    document
      .querySelectorAll(".bar")
      .forEach((bar) => bar.setAttribute("style", "--w:70%")),
  ),
);
