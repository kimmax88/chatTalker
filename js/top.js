const toTop = document.querySelector(".toTop");

toTop.addEventListener("click",()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
})


window.addEventListener("scroll", ()=>{
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toTop.style.visibility = "visible";
    toTop.style.opacity = "1";
  } else {
    toTop.style.visibility = "hidden";
    toTop.style.opacity = "0";
  }
  
})
