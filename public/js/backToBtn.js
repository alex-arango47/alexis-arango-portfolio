window.onscroll = (event) => {

   const main = document.querySelector("#backToTop-Main");
   const button = document.querySelector("#backToTop-Main_Btn");

   if(window.pageYOffset > 800){
      button.classList.add("backToTop");
      main.classList.remove("backToTopGhost")
   } else if (window.pageYOffset < 800 && button.classList.contains("backToTop")){
      button.classList.add("backToTopFadeOut");
      button.classList.remove("backToTop");
      setTimeout(() => {
         button.classList.remove("backToTopFadeOut");
         main.classList.add("backToTopGhost");
      }, 500)
   }
};