window.onload = function(){
  const form =document.querySelector("form");
  form.onsubmit = function(event) {
    //event.preventDefault();

    const ageInput = parseInt(document.getElementById("age").value); 
    let ballot = document.getElementById("vote"); 
    ballot.setAttribute("class" ,"hidden");  
    let tooYoung = document.getElementById("under-18"); 

    if(ageInput >= 18){ 
      //Un-hide the ballot. 
      ballot.removeAttribute("class"); 
    }else{ 
      //Keep ballot hidden, display 'under-18' msg & info-site links. 
      tooYoung.removeAttribute("class"); 
    } 

    event.preventDefault(); 
  }
}
