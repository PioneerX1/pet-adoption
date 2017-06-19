// BUSINESS LOGIC

//Pet constructor
function Pet(petName, petAge, petSpecies) {
  this.petName = petName;
  this.petAge = petAge;
  this.petSpecies = petSpecies;
  this.petStatus = "available";
}

//prototype to change status
Pet.prototype.changeStatus = function() {
  this.petStatus = "adopted";
}

//prototype to get status
Pet.prototype.getStatus = function() {
  return this.petStatus;
}

//sort pets into available or adopted arrays accordingly, pass in pet object
function sortPets() {
  for(var i=0; i < allPets.length; i++) {
    if (allPets[i].petStatus === "available") {
      availablePets.push(allPets[i]);
    } else if (allPets[i].petStatus === "adopted") {
      adoptedPets.push(allPets[i]);
    }
  }
}

//arrays for available and adopted pets
var allPets = [];
var availablePets = [];
var adoptedPets = [];

//USER INTERFACE LOGIC
$(document).ready(function() {
    $("form#new-pet-form").submit(function(event) {
      event.preventDefault();
      //reset Available and Adopted Pet Arrays, not All Pets
      availablePets = [];
      adoptedPets = [];
      //input from fields
      var name = $("#new-pet-name").val();
      var age = $("#new-pet-age").val();
      var species = $("input:radio[name=species]:checked").val();

      //create Pet object
      var newPet = new Pet(name, age, species);
      //populate All Pets array with new Pet object
      allPets.push(newPet);
      //sort newly initialized Available and Adopted Pet arrays accordingly
      sortPets();

      console.log(availablePets[0].petStatus);


  });
});
