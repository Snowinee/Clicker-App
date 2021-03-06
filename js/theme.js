const themeButtons = document.querySelectorAll(".theme")
const style = document.getElementById("style")
const themeSound = new Audio("audio/themeSound.mp3")
let themeValue = "";

const updateTheme = (theme) => {
    style.setAttribute("href", theme)
    themeValue = theme
    localStorage.setItem("theme", theme);
}

themeButtons.forEach(item => {
    item.addEventListener("click", (e) => {
        let data = item.dataset.id
        themeSound.volume = .3;
        themeSound.play()
        updateTheme(data)
    })
})

if (localStorage.getItem("theme")) {
    updateTheme(localStorage.getItem("theme"));
}





