const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('crocodile', 'carnivore', 2)
    dinosaur3 = new Dinosaur('pigeon', 'carnivore', 100)
    dinosaur4 = new Dinosaur('pigeon', 'carnivore', 90)

    park = new Park('Jurassic Park', 5, [dinosaur1, dinosaur2])
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.hasDinosaurs();
    assert.strictEqual(actual, true );
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3] )
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur();
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostAttractedDinosaur();
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find the dinosaur that attracts the most visitors --dinosaur3', function(){
    park.addDinosaur(dinosaur3);
    const actual = park.mostAttractedDinosaur();
    assert.strictEqual(actual, dinosaur3)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.findDinosaursBySpecies('pigeon');
    assert.deepStrictEqual(actual,[dinosaur3, dinosaur4] )
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.removeDinosaurBySpecies('pigeon');
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2])
  });

});
