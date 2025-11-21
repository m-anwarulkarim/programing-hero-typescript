// 1. Generic Array 2. Generic Tuple 3. Generic Array of Objects

// =====================================================
// ✅ Generics in TypeScript :
// =====================================================

/*
Generics: TypeScript এ একটি feature যা function, class, interface ইত্যাদিকে
flexible রাখে। মানে, টাইপ আগে থেকে নির্দিষ্ট না করে ব্যবহারকারীর
প্রয়োজন অনুযায়ী টাইপ নিতে দেয়।
*/

/* -----------------------------
1️. Generic Array
----------------------------- */
let numbers: Array<number> = [1, 2, 3, 4]; // number type array
let strings: Array<string> = ["a", "b", "c"]; // string type array

type numbers2 = Array<number>;
/* -----------------------------
2️. Generic Tuple (Type Alias)
----------------------------- */
type Pair<T, U> = [T, U]; // T,U হলো placeholder

const pairA: Pair<string, number> = ["Age", 25];
const pairB: Pair<boolean, string> = [true, "Yes"];

/* -----------------------------
3. Generic Array of Objects
----------------------------- */
type GenericArray<T> = Array<T>;

const genericObj: GenericArray<{ name: string; age: number }> = [
  { name: "Anwar", age: 22 },
  { name: "Sakib", age: 9 },
];
/* -----------------------------

/*
Step-by-step summary:
1. <T> হলো placeholder, মানে "যেকোনো type"
2. Function/Array/Tuple/Interface এ ব্যবহার করা যায়
3. Input এবং output একই type হবে
4. Reusable ও flexible কোড তৈরিতে সহায়ক
*/
