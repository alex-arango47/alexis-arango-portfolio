window.onload = (event) => {
    const body = document.querySelector("body");
    body.classList.add("bodyFreeze")
    setTimeout(() => {
        const loadPage = document.querySelector("#loadPage");
        loadPage.classList.remove("loadPage");
        loadPage.classList.add("loadPageFadeOut");
        setTimeout(() => {
            loadPage.classList.remove("loadPageFadeout")
            loadPage.classList.add("loadPageGhost");
            body.classList.remove("bodyFreeze")
        }, 1000)
    }, 1000)
};