(function page(){
  const question = document.getElementsByClassName("itemBox--question");
  const questionBtn = document.getElementsByClassName("question__btn");
  var index = 0 ;
  question[0].addEventListener("click", (e) =>{
    if(e.target.className == "question__btn"){
      if(e.target.dataset.index != index){
        if(index > 0){
          questionBtn[index - 1].parentNode.parentNode.classList.remove("open");
        }
      }
      e.target.parentNode.parentNode.classList.toggle("open");
      index = e.target.dataset.index;
      console.log(index);
      
    }   
  })
})()

