const htjButton = document.querySelector("#htj_btn");
const reactButton = document.querySelector("#react_btn");

const htjMenu = document.querySelector(".hcj_projects_menu");
const reactMenu = document.querySelector(".react_projects_menu");

htjButton.addEventListener("click", () => {
    htjMenu.style.display = "grid";
    reactMenu.style.display = "none";
});

reactButton.addEventListener("click", () => {
    htjMenu.style.display = "none";
    reactMenu.style.display = "grid";
});