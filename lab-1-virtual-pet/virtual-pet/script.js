// Variables
let petName = "Luna";

let petTypes = ["dog", "cat", "dragon", "hamster"];
let moods = ["happy", "sleepy", "excited", "grumpy"];

let petType = petTypes[Math.floor(Math.random() * petTypes.length)];
let petAge = Math.floor(Math.random() * 10);
let mood = moods[Math.floor(Math.random() * moods.length)]; 

let isHungry = false;
let favoriteActivities = ["playing", "running", "sleeping"];

 // Update function
 function updatePet() {
   let description =
     `Meet ${petName}, a ${petAge}-year-old ${petType} who loves ${favoriteActivities[0]} and feels ${mood}!`;

   document.getElementById("petDescription").innerText = description;
  }

// First load
updatePet();

// User interaction
function changeName() {
  
  let input = document.getElementById("nameInput").value;
    if (input !== "") {
     petName = input;
     updatePet();
      }
 }

 function increaseAge() {
   petAge++;
   updatePet();
  }

 function decreaseAge() {
    if (petAge > 0) {
     petAge--;
   updatePet();
     }
  }
