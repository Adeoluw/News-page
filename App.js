const openMenu = document.getElementsByClassName("menu")[0]

const closeMenu = document.getElementsByClassName("close-menu")[0]

const menu = document.getElementsByTagName("nav")[0]


openMenu.addEventListener("click", () =>{
    menu.style.display = "block"
    openMenu.style.display = "none"
})

closeMenu.addEventListener("click", () =>{
    menu.style.display ="none";
    openMenu.style.display ="block"
})