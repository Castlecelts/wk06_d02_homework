const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs
};

Park.prototype.hasDinosaurs = function () {
  if (this.dinosaurs.length > 0){
    return true
  }
  else
  return false
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};

// Park.prototype.removeDinosaurBySpecies = function (species) {
//   for (let i = 0; i < this.dinosaurs.length; i++) {
//     if (this.dinosaurs[i].species === species){
//       this.dinosaurs[i].splice(0, 1);
//       break;
//     }
//     else
//     return
//   }
// };

Park.prototype.removeDinosaur = function () {
  this.dinosaurs.pop()
}

Park.prototype.mostAttractedDinosaur = function () {
  let mostPopularDino = this.dinosaurs[0]
  for (dinosaur of this.dinosaurs){
    if (dinosaur.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay){
      mostPopularDino = dinosaur
    }
  }
  return mostPopularDino
};

Park.prototype.findDinosaursBySpecies = function (species) {
  let foundDinosaurs = [];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      foundDinosaurs.push(dinosaur)
    }
  }
  return foundDinosaurs
};

Park.prototype.removeDinosaurBySpecies = function (species) {
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur.species), 1)
    }
  }
  return this.dinosaurs
}

module.exports = Park;
