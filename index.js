const icon = document.getElementById("icon")
icon.addEventListener('click', toggleTheme)

// function to change the icons 
function changeIcons() {
    if (icon.src.endsWith('sun.png')) {
        icon.src = "images/moon.png";
    } else {
        icon.src = "images/sun.png";
    }
}
// function to toggle theme 
function toggleTheme() {
    document.body.classList.toggle("light-theme");
    changeIcons();
}