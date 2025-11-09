/*✅ 1. Ternary Operator

এটা basically ছোট if else shortcut.

Format:

condition ? true হলে যা হবে : false হলে যা হবে

✅ Example 1: simple ternary
const age = 20;
const msg = age >= 18 ? "Adult" : "Child";

console.log(msg); // Adult

✅ Example 2: nested ternary (avoid if possible)
const mark = 85;

const grade =
  mark >= 80 ? "A+" :
  mark >= 70 ? "A"  :
  mark >= 60 ? "B"  :
  "F";

console.log(grade);

// *******************************************************

✅ Nullish Coalescing (??) কি?

এটা একটি default value দেওয়ার operator, কিন্তু খুব স্পেসিফিকভাবে কাজ করে।

👉 এটা কেবল তখনই default value ব্যবহার করবে যখন ভ্যারিয়েবলটি null বা undefined হবে।
👉 অন্য কোন falsy value (0, "", false) দেখলেই fallback নেবে না।

✅ Formula
value ?? defaultValue


Meaning:
value যদি null বা undefined হয় তাহলে defaultValue নেবে।

let name = null;
console.log(name ?? "Guest");

***************************************************


✅ 3. Optional Chaining (?.)

যখন কোনো object এর nested property access করতে চাই
কোনো কিছু undefined হলে error না দিয়ে 'undefined' রিটার্ন করবে।

Format:

obj?.prop
obj?.prop?.subProp
func?.()

✅ Example 1:
const user = {
  name: "Anwar",
  address: {
    city: "Dhaka"
  }
};

console.log(user.address?.city); // Dhaka
console.log(user.contact?.email); // undefined (no error)

✅ Example 2: optional chaining with function
const obj = {
  sayHi() {
    return "Hello";
  }
};

console.log(obj.sayHi?.()); // Hello
console.log(obj.sayBye?.()); // undefined

✅ Example 3: optional chaining in array
const data = {
  items: null
};

console.log(data.items?.[0]); // undefined (no error)

*/
