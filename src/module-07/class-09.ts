// ======================================================
// 🌟 Abstraction in TypeScript (OOP Concept)
// ======================================================

/*
🔹 Abstraction কী?

Abstraction হলো অপ্রয়োজনীয় Detail data লুকিয়ে রাখা এবং কেবল গুরুত্বপূর্ণ তথ্য দেখানো।
সহজভাবে বলতে গেলে:

1️⃣ আমরা "কি করতে হবে" দেখাই
2️⃣ "কিভাবে করতে হবে" লুকিয়ে রাখি

এটি OOP-এর একটি মূল ধারণা। এটি আমাদের কোডকে clean এবং maintainable করে।

Abstraction প্রয়োগ করা যায় TypeScript-এ:
1. Interface ব্যবহার করে
2. Abstract Class ব্যবহার করে
*/

// ======================================================
// 1️⃣ Interface ব্যবহার করে Abstraction
// ======================================================

/*
Interface হলো কেবল "কি করতে হবে" declare করার একটি উপায়।
Interface-এর ভিতরে কোন কিভাবে implement হবে তা বলা হয় না। 
Implementation আলাদা ক্লাসে করা হয়।
*/

interface Vehicle {
  startEngine(): void; // কি করতে হবে
  stopEngine(): void;
}

// Car class implements করে interface এর method কিভাবে কাজ করবে তা define করে
class Car implements Vehicle {
  startEngine() {
    console.log("Car engine started");
  }
  stopEngine() {
    console.log("Car engine stopped");
  }
}

// Bike class আলাদা implementation দেয়
class Bike implements Vehicle {
  startEngine() {
    console.log("Bike engine started");
  }
  stopEngine() {
    console.log("Bike engine stopped");
  }
}

// ব্যবহার
const myCar: Vehicle = new Car();
myCar.startEngine(); // Car engine started
myCar.stopEngine(); // Car engine stopped

const myBike: Vehicle = new Bike();
myBike.startEngine(); // Bike engine started
myBike.stopEngine(); // Bike engine stopped

/*
🔹 Interface সুবিধা:
- কেবল contract declare করে
- একাধিক ক্লাসে reuse করা যায়
- Implementation লুকানো থাকে
*/

// ======================================================
// 2️⃣ Abstract Class ব্যবহার করে Abstraction
// ======================================================

/*
Abstract Class হলো এমন একটি class, যার মধ্যে:
1️⃣ কিছু method declare করা থাকে (abstract) → কোন কিভাবে হবে বলা হয় না
2️⃣ কিছু normal method থাকতে পারে → shared behavior

Abstract Class extend করে child class implementation দেয়
*/

abstract class VehicleAbstract {
  abstract startEngine(): void; // abstract method → কি করতে হবে
  abstract stopEngine(): void;

  // Normal method → shared behavior
  move() {
    console.log("Vehicle is moving");
  }
}

// Car extends করে abstract class এবং আলাদা implementation দেয়
class Car2 extends VehicleAbstract {
  startEngine() {
    console.log("Car engine started");
  }
  stopEngine() {
    console.log("Car engine stopped");
  }
}

// Bike extends করে আলাদা implementation দেয়
class Bike2 extends VehicleAbstract {
  startEngine() {
    console.log("Bike engine started");
  }
  stopEngine() {
    console.log("Bike engine stopped");
  }
}

// ব্যবহার
const carInstance = new Car2();
carInstance.startEngine(); // Car engine started
carInstance.move(); // Vehicle is moving

const bikeInstance = new Bike2();
bikeInstance.startEngine(); // Bike engine started
bikeInstance.move(); // Vehicle is moving

/*
🔹 Abstract Class সুবিধা:
1️⃣ Abstract method → "কি করতে হবে" declare করে, implementation child class এ
2️⃣ Normal method → common behavior share করে
3️⃣ Code reuse সম্ভব
4️⃣ Implementation লুকানো থাকে, কেবল গুরুত্বপূর্ণ অংশ exposure হয়
*/

// ======================================================
// 📝 Summary
// ======================================================
/*
1️⃣ Abstraction = অপ্রয়োজনীয় detail লুকিয়ে গুরুত্বপূর্ণ কাজ দেখানো
2️⃣ Interface = শুধু "কি করতে হবে" declare করে
3️⃣ Abstract Class = "কি করতে হবে" declare + কিছু common behavior share
4️⃣ Child class implements/extends করে বাস্তব implementation দেয়
5️⃣ কোড clean, reusable ও maintainable হয়
*/
