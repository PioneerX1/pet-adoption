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
    console.log(newPet);
    //populate All Pets array with new Pet object
    // allPets.push(newPet);
    // //sort newly initialized Available and Adopted Pet arrays accordingly
    // sortPets();

    //console.log(availablePets[0].petStatus);
    // for(var i=0; i < availablePets.length; i++) {
      $("#available-pets").append("<li>" + newPet.petName + "  " + "<span id="+newPet.petName+newPet.petAge+">" + newPet.petAge + "  " + newPet.petSpecies + "  " + "</span>"+ "<button id="+ newPet.petName +" type='button' class='btn adoptedButton'>" + "Adopted" + "</button>" + "</li>");

      $("#"+newPet.petName+"").click(function() {
        $("#"+newPet.petName+newPet.petAge+"").hide();
      });

      $("button#" + newPet.petName + "").on("click", function() {
        event.preventDefault();
        // var temp = $(this).closest("li");
        //console.log(temp);

        // adoptedPets.push(availablePets[i]);
        // console.log(adoptedPets.toString());
        // $("#adopted-pets").append(temp);
        $(this).closest("li").remove();
        $("#adopted-pets").append("<li>" + newPet.petName + "</li>");
    });
    // }

      // $("#available-pets").removeChild();


  // $("#adoptedButton").on("click", function() {
  //   event.preventDefault();
  //   $("#available-pets").parent().remove();

  });

});
