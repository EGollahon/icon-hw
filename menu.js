window.onload = function() {
    var menuButton = document.getElementById("menu");
    menuButton.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    var navList = document.getElementById("navList");

    if (navList.style.display === "none") {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none"
    }
}