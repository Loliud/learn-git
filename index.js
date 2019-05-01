
var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');
var newDog = new Dog('Wendy', 19);
var tom = new Cat('Tom', 20);
var mickey = new Mouse('Mickey', 20);
tom.eat(mickey);
newDog.eat(tom);
console.log(newDog);

