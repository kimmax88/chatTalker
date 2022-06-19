(function page(){
  const question = document.getElementsByClassName("itemBox--question");
  const questionBtn = document.getElementsByClassName("question");

  const people = document.getElementsByClassName("people");
  const priceBtn = document.getElementsByClassName("btn--price");

  const peopleText = document.querySelector(".itemBox--plane").querySelectorAll(".hot span");
  const moneyText = document.querySelector(".itemBox--plane").querySelectorAll(".money span");

  

  var indexP = 1 ;
  var indexQ = 3 ;
  question[0].addEventListener("click", (e) =>{
    var ta;
    if(e.target.tagName == "BUTTON" ||e.target.tagName == "DT"){
      if(e.target.tagName == "BUTTON"){ ta = e.target.parentNode.parentNode;}
      if(e.target.tagName == "DT"){ ta = e.target.parentNode;}
      if(ta.dataset.index != indexQ){ 
        questionBtn[indexQ - 1].classList.remove("open");
      }
      ta.classList.toggle("open");
      indexQ = ta.dataset.index;
    }  
  })


  people[0].addEventListener("click", (e) =>{
    if(e.target.classList.contains("btn--price")){
      if(e.target.dataset.index != indexP){ 
        priceBtn[indexP - 1].classList.remove("btn--price-selected");
        e.target.classList.toggle("btn--price-selected");
        indexP = e.target.dataset.index;
        
        for(i=0; i<peopleText.length; i++){
          peopleText[i].textContent = e.target.textContent.slice(0, -1);
        }

        moneyText[0].textContent = Number(e.target.textContent.slice(0, -1)) *0.06 || 2000;
        moneyText[1].textContent = Number(e.target.textContent.slice(0, -1)) *0.16 || 5000;
        

        
      }
    } 
  })
})()

