let raceNumber = Math.floor(Math.random() * 1000);
// Registration variable
let registeredEarly = true;
// Variable for runners age
let runnerAge = 75;
// Race numbers for early adult (over 18 years) registration
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}
// Start times and race numbers for racers
if (runnerAge > 18 && registeredEarly) {
  console.log(`Your race starts at 9:30 am. Your racing number is ${raceNumber}.`);
  } else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your race starts at 11:00 am. Your racing number is ${raceNumber}.`);
  } else if (runnerAge < 18){
    console.log(`Your race starts at 12:30 pm. Your racing number is ${raceNumber}.`);
  } else {
    console.log('Kindly see the registration desk for assistance!');
  }
