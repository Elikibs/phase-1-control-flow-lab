function scuberGreetingForFeet(theRide){ 
  if (theRide<=400){
    return "This one is on me!";
  } else if(theRide>2000 && theRide<2500){
    return "I will gladly take your thirty bucks.";
  } else if(theRide>2500){
  return "No can do.";
}
  
}

function ternaryCheckCity(city){
  if (city==="NYC"){return "Ok, sounds good."
} else {
  return "No go."
}
  
}

function switchOnCharmFromTip(tip){
  switch (tip){
case "generous":
  return "Thank you so much.";
case "not as generous":
  return "Thank you.";
default :
  return "Bye." }
 
}