window.onload = function(){
  const form =document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let ballot = document.getElementById("vote")
    ballot.setAttribute("class" ,"hidden"); 

    
  }
}
