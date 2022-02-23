/*-------------------------------------------------------------------------
scuberGreetingForFeet()
      ✓ gives customers a free sample if the ride is less than or equal to 400 feet
      1) charges 30 dollars for a distance over 2000 feet
      2) does not allow rides over 2500 feet
*/
function scuberGreetingForFeet(rideDistance){

  let result;

  if (rideDistance <= 400){
      result = 'This one is on me!';
  } else if (rideDistance > 2000 && rideDistance <= 2500){
        result = 'I will gladly take your thirty bucks.';
    } else if (rideDistance > 2500){
            result = 'No can do.'
      }
    
  return result; 
}

/*-------------------------------------------------------------------------
ternaryCheckCity()
      3) returns "Ok, sounds good." when the city is NYC
      4) should return "No go." if the destination city is not NYC
*/
function ternaryCheckCity(city){
  const cityMessage = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';

  return cityMessage;
}

/*-------------------------------------------------------------------------
switchOnCharmFromTip()
      5) should return "Thank you so much." if the tip is generous
      6) should return "Thank you." if the tip is not as generous
      7) should return "Bye." if anything else
*/

function switchOnCharmFromTip(tipAmount){

  switch (tipAmount){
    case 'generous' : return "Thank you so much.";

    case 'not as generous' : return 'Thank you.';

    default: return "Bye.";

  }
  return
}