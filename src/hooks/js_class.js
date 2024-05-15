//JavaScript Classes are templates for JavaScript Objects.
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const car1 = new Car("corolla", 2015);
const car2 = new Car("bmw", 2015);
const car3 = new Car("corolla", 2015);
const car4 = new Car("corolla", 2015);
console.log(car1);
