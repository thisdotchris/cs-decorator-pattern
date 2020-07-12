// Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.
abstract class Car {
  model!: string;

  getModel() {
    return this.model;
  }

  public abstract price(): number;
}

abstract class CarOptions extends Car {
  car!: Car;
  public abstract price(): number;
}

class ModelX extends Car {
  public model: string = "Car ModelX";
  public price() {
    return 5000;
  }
}

class ModelY extends Car {
  public model: string = "Car ModelY";
  public price() {
    return 4000;
  }
}

class Automatic extends CarOptions {
  public model!: string;
  constructor(car: Car) {
    super();
    this.car = car;
    this.model = this.car.getModel() + " Automatic Transmision";
  }
  public price(): number {
    return this.car.price() + 2000;
  }
}

class Manual extends CarOptions {
  public model!: string;
  constructor(car: Car) {
    super();
    this.car = car;
    this.model = this.car.getModel() + " Manual Transmision";
  }
  public price(): number {
    return this.car.price() + 2000;
  }
}

console.clear();
let myCar = new ModelX();
console.log(myCar, `price: ${myCar.price()}`);
myCar = new Manual(myCar);
console.log(myCar, `price: ${myCar.price()}`);
