// ===============================================
// 🔥 1. Inheritance কী?
// ===============================================
/*
Inheritance মানে হলো —
একটি ক্লাস (Child Class) অন্য একটি ক্লাসের (Parent Class)
property এবং method গুলোকে উত্তরাধিকার হিসেবে পায়।

👉 সহজ ভাষায়:
Parent Class → Common জিনিসগুলো রাখবে
Child Class → এগুলো পেয়ে যাবে + নিজস্ব extra property/method যোগ করতে পারবে
*/

// ===============================================
// 🏛️ Parent Class
// ===============================================

class Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  getSleep(hours: number) {
    console.log(`${this.name} ${hours} ঘন্টা ঘুমায়`);
  }
}

// ===============================================
// 👨‍🎓 Student Class (Child) — শুধু Parent এর সবকিছু ইনহেরিট করছে
// ===============================================

class Student extends Parent {
  // Student-এর নিজের বাড়তি কিছু নেই,
  // তাই constructor লিখার দরকার নেই।
}

const student1 = new Student("Mr. Fakibaz", 22, "Bangladesh");
student1.getSleep(8); // Parent এর method ব্যবহার করছে

// ===============================================
// 👨‍🏫 Teacher Class (Child) — Parent + Extra Property/Method
// ===============================================

class Teacher extends Parent {
  designation: string;

  constructor(
    name: string,
    age: number,
    address: string,
    designation: string // extra field
  ) {
    super(name, age, address); // 👈 Parent class এর constructor কে কল করা হলো
    this.designation = designation; // 👈 Teacher এর নিজস্ব property
  }

  takeClass(numberOfClass: number) {
    console.log(
      `${this.name} ${numberOfClass} ঘন্টা ক্লাস নেয় (${this.designation})`
    );
  }
}

const teacher = new Teacher(
  "Mr. Smart Teacher",
  35,
  "Bangladesh",
  "Senior Teacher"
);

teacher.takeClass(5);
