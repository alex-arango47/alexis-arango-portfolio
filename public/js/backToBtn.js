window.addEventListener('scroll', () => {
     if(window.pageYOffset > 800){
        document.querySelector(".backToTop").style = "display: flex";
     } else if (window.pageYOffset < 800){
        document.querySelector(".backToTop").style = "display: none";
     }
});