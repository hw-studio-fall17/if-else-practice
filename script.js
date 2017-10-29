$(document).ready(function(){
  // We declared two variables 
  var likesSugaryFoods = prompt("Do you like sugary foods? (yes or no)")
  var likesSaltyFoods = prompt("Do you like salty foods? (yes or no)")
  

  if (likesSugaryFoods == "yes" && likesSaltyFoods == "yes") {
    alert("Have a delicious chocolate covered peanut butter-filled pretzel!");
  } else if (likesSugaryFoods == "no" && likesSaltyFoods == "no") {
    alert("I'm not sure what kind of food to give you!?");
  } 
 

})