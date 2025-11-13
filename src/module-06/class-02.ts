//#.Interface  #.extends #.Index Signature  #.Array of Interface #. function of interface

/* =====================================================
   1. Interface কি?
======================================================= */

/* 
Interface হলো TypeScript এ একটি object এর structure declare করার সবচেয়ে উপযোগী উপায়। 
এটি TypeScript কে জানায় যে এই object এ কোন কোন property থাকবে এবং property type কী হবে। 

Object type হতে পারে:
- Object
- Array
- Function
*/

/* ================= Example ================= */

interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // Optional property
}

const person: User = {
  name: "Anwar",
  age: 22,
};

/* =====================================================
   2. Interface extends example
======================================================= */

/* 
একটি basic interface কে আরেকটি interface extend করতে পারে, মানে বড় করে তৈরি করা যায়
*/

interface Admin extends User {
  role: string;
}

const adminUser: Admin = {
  name: "Anwar",
  age: 22,
  role: "Super Admin",
};

/* 
Type Alias এ extends নেই। Type Alias এ একই কাজ করতে গেলে intersection (&) ব্যবহার করতে হয়:
*/

type UserType = {
  name: string;
  age: number;
};

type AdminType = UserType & {
  role: string;
};

const admin2: AdminType = {
  name: "Karim",
  age: 25,
  role: "Moderator",
};

/* =====================================================
   3. Index Signature
======================================================= */

/* 
Interface দিয়ে Array declare করা যায় যাতে:
- index type থাকে
- value type থাকে
*/

interface MyArray {
  [index: number]: string;
}

const arr: MyArray = ["apple", "banana", "orange"];
console.log(arr);

/* 
index → number (0,1,2...)  
value → string ("apple") 
*/

/* =====================================================
   4. Function এর parameter এবং return type
      Interface দিয়ে define করা
======================================================= */

interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => x + y;

/* =====================================================
   5. Array of Interface
======================================================= */

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Siam", age: 22 },
  { name: "Rafi", age: 25 },
];

/* প্রতিটি object User interface অনুসরণ করবে। Property missing হলে TypeScript error দিবে */

/* =====================================================
   6. Interface vs Type Alias
======================================================= */

/* 
1. Syntax আলাদা:
Interface:
interface User {
  name: string;
  age: number;
}

Type Alias:
type User = {
  name: string;
  age: number;
}

2. Interface দিয়ে Extend করা সহজ। Type Alias এ extends নেই, intersection (&) ব্যবহার করতে হয়।
*/
interface ArrInterface {
  id: number;
  name: string;
}
