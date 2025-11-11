//1. Type Assertion

/*✅ Type Assertion ki?

TypeScript mainly বলছে:
"ভাই, আমি এই ভ্যারিয়েবলের টাইপটা ঠিক বুঝতে পারছি না, তুমি যদি নিশ্চিত হও তাহলে আমাকে বলে দাও এটা আসলে কোন টাইপ।"

Type Assertion মানে তুমি TypeScript-কে বলছো
“এই ভ্যালুর আসল টাইপ আমি জানি, তুমি দুশ্চিন্তা করো না।”

✅Basic Example

let data: any = "Hello";

let length = (data as string).length;

এখানে
data এর টাইপ any, তাই TS জানে না এটা string কিনা।
তাকে বলা হলো: (data as string)
TypeScript শান্ত হয়ে বিশ্বাস করলো। */

const checkStudentInfo = (value: any): any => {
  if (typeof value === "string") {
    console.log(`Student name is ${value}`);
  } else if (typeof value === "number") {
    if (value >= 80) {
      return `Grade: A+`;
    }
  } else {
    return "Invalid input type!";
  }
};

// Example calls
checkStudentInfo("Anwarul");
console.log(checkStudentInfo(85));

/*
***************************
✅ Wrong Assertion করলে?

TypeScript বিশ্বাস করে ফেলে…
কিন্তু runtime এ error মারবে।

let value: any = 123;

console.log((value as string).toUpperCase()); // Runtime এ crash করবে


✅ কবে ব্যবহার করা উচিত?

Type Assertion use করো যখন:

তুমি আসল টাইপ নিশ্চিত।

TypeScript ভুল বুঝে টাইপ infer করেছে।

DOM বা third-party data নিয়ে কাজ করছো।

API response dynamically আসে। */
