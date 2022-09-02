const burgerBtn = document.querySelector("#headerMain-Burger");
const burgerMenu = document.querySelector("#burgerMenu-Main");
const menuNavBar = document.querySelector("#burgerMenu-Main_NavBar");

burgerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // Menu
    if(burgerMenu.classList.contains("burgerMenu-Main_Show")){
        burgerMenu.classList.remove("burgerMenu-Main_Show")
        burgerMenu.classList.add("burgerMenu-Main_FadeOut")
        setTimeout(() => {
            burgerMenu.classList.add("burgerMenu-Main_Hidden")
            burgerMenu.classList.remove("burgerMenu-Main_FadeOut")
        }, 450)
    } else {
        burgerMenu.classList.remove("burgerMenu-Main_Hidden")
        burgerMenu.classList.add("burgerMenu-Main_Show")
    }
    // Nav Bar
     if(menuNavBar.classList.contains("navSection-Mobile_Show")){
         menuNavBar.classList.remove("navSection-Mobile_Show")
         menuNavBar.classList.add("navSection-Mobile_FadeOut")
         setTimeout(() => {
             menuNavBar.classList.add("navSection-Mobile_Hidden")
             menuNavBar.classList.remove("navSection-Mobile_FadeOut")
         }, 450)
     } else {
         menuNavBar.classList.remove("navSection-Mobile_Hidden")
         menuNavBar.classList.add("navSection-Mobile_Show")
    }
})
