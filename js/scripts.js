// BUSINESS LOGIC

//Pet constructor
function Pet(petName, petAge, petSpecies, petStatus) {
  this.petName = petName;
  this.petAge = petAge;
  this.petSpecies = petSpecies;
  this.petStatus = "available";
}

//prototype to change status
Pet.prototype.changeStatus() {
  this.petStatus = "adopted";
}

//prototype to get status
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

//arrays for available and adopted pets
var allPets = [];
var availablePets = [];
var adoptedPets = [];

//USER INTERFACE LOGIC
