//(Non-Primitive Type |) 1. array  2. tuple
/* 
✅ Non-Primitive Types কি?

Non-primitive types মানে যেসব ডেটা স্ট্রাকচার value হিসেবে simple না, বরং multiple value ধারণ করতে পারে এবং mutable হয়।

TypeScript বা JavaScript এ non-primitive টাইপ মূলত ৩টা জিনিস:
Object
Array
Function

এগুলোকে  নিজের মতো করে modify করা যায়।
Primitive টাইপগুলো immutable, Non-primitive টাইপগুলো mutable।

উদাহরণ:

Array – একই টাইপ বা বিভিন্ন টাইপের একাধিক ডেটা রাখার জন্য।

let numbers: number[] = [1, 2, 3];


Object – key-value pair হিসেবে ডেটা স্টোর করার জন্য।

let person: {
name: string, 
age: number
} = {
 name: "Anwar",
  age: 25
 };


Function – ফাংশনও একটি reference type।

let greet: () => void = () => console.log("Hello!");


Class / Interface – custom structured type বানাতে ব্যবহার হয়।

বৈশিষ্ট্য:

Mutable: ডেটা পরিবর্তনযোগ্য।

Reference stored: copy করলে মূল ডেটার reference চলে যায়।

সংক্ষেপে:
Primitive type সরাসরি ভ্যালু রাখে, Non-Primitive type reference ধরে রাখে।

*/
