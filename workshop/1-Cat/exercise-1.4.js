// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.species = "cat";
    this.tiredness = 100;
    this.hunger = 50;
    this.loneliness = 25;
    this.happiness = 0;
    this.name = name;
    this.breed = breed;
  }

  sleep = (hours) => {
    this.tiredness = this.tiredness - hours * 5;
    this.happiness = this.happiness + 1;
  };

  eat = (kibbles) => {
    this.hunger = this.hunger - kibbles * 0.2;
    this.happiness = this.happiness + 1;
  };

  play = (minutes) => {
    this.loneliness = this.loneliness - minutes * 3;
    this.happiness = this.happiness + 1;
  };

  wait = (minutes) => {
    this.tiredness = this.tiredness + minutes * 2;
    this.hunger = this.hunger + minutes * 3;
    this.loneliness = this.loneliness + minutes;
    this.happiness = this.happiness - minutes;
  };
}

let boots = new Cat("boots", "siamese");

// boots.sleep(5);
// boots.eat(20);
// boots.play(5);
boots.wait(5);
console.log(boots);
