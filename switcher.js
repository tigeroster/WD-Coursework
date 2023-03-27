document.querySelector(".switcher-button").onclick = () => {
  document.querySelector(".switcher").classList.toggle("active");
};

let themebuttons = document.querySelector('.theme-buttons')

themebuttons.forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').setProperty('--main-color', dataColor)
    })
})