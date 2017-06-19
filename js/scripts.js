// BUSINESS LOGIC

function Pet(name, age, species) {
  this.petName = name;
  this.petAge = age;
  this.petSpecies = species;
  this.petStatus = "available";
}

Pet.prototype.changeStatus() {
  this.petStatus = "adopted";
}

Pet.prototype.getStatus() {
  return this.petStatus;
}

//sort pets into available or adopted arrays accordingly, pass in pet object
function sortPets(pet) {
  if (pet.petStatus === "available") {
    availablePets.push(pet);
  } else if (pet.petStatus === "adopted") {
    adoptedPets.push(pet);
  }
}

var availablePets = [];
var adoptedPets = [];


//USER INTERFACE LOGIC
