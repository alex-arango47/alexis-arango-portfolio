window.onload = (event) => {
    setTimeout(() => {
        const loadPage = document.querySelector("#loadPage");
        loadPage.classList.remove("loadPage");
        loadPage.classList.add("loadPageFadeOut");
        setTimeout(() => {
            loadPage.classList.remove("loadPageFadeout")
            loadPage.classList.add("loadPageGhost");
        }, 1000)
    }, 1000)

};