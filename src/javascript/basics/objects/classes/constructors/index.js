// Code goes here...

 export class Vehicle{
   constructor(engineType, numberOfDoors, make) {
     this.engineType = engineType;
     this.numberOfDoors = numberOfDoors;
     this.make = make;
   }
 }

 export class Truck extends Vehicle{
   constructor(engineType, numberOfDoors, make) {
     super(engineType = 'V8', numberOfDoors = 1, make)
   };
 }

  export class Car extends Vehicle{
    constructor (engineType = 'V4', numberOfDoors = 4, make) {
      super(engineType, numberOfDoors, make)
    }
  }

  export const Prius = new Car(V4, 4, Prius);

  export const F150 = new Truck(V8, 2, F150);
 }
