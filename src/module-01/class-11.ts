//  1.Union type,  2 .Intersection type

/*✅ Union Type 
(একাধিক টাইপের মধ্যে যেকোনো একটা)

Union মানে হলো
“এটা এটা বা এটা”
অর্থাৎ value একটা টাইপের মধ্যে যেকোনো একটিই হতে পারবে।

Union symbol: | 

✅ Union recap

👉 Union মানে OR
👉 যেকোনো এক ধরনের data allowed
👉 ফ্লেক্সিবল টাইপ

*/

// ✅ Example 2: Union with literal types
type Status = "success" | "error" | "loading";

let s: Status;
s = "loading"; // ✅
s = "error"; // ✅
// s = "fail";      // ❌ not allowed

// ✅ Example 3: Union with objects
type UserObj = { name: string };
type AdminObj = { name: string; role: "admin" };

let person: UserObj | AdminObj;

person = { name: "Anwar" }; // ✅
person = { name: "Anwar", role: "admin" }; // ✅
// person = { role: "admin" };                 // ❌

// **********************************************

/* ✅ Intersection Type (একাধিক টাইপকে একসাথে মিক্স করা)

Intersection মানে হলো
“এইটাই হবে, এর সাথে এটা, এর সাথে এটাও”
অর্থাৎ সব টাইপের prop গুলো মিলিয়ে একটা নতুন টাইপ তৈরি হয়।

Intersection symbol: &

✅ Intersection recap

👉 Intersection মানে AND
👉 সব টাইপকে একত্রে মিক্স করে
👉 নতুন টাইপ তৈরি করে
👉 আরও strict টাইপ সিস্টেম
*/

// ✅ Example 2: Intersection with required fields
type User = { name: string };
type AdminInfo = { isAdmin: boolean };

type Admin = User & AdminInfo;

const a: Admin = {
  name: "Siam",
  isAdmin: true,
};

// ✅ Example 3: Intersection tricky case
type X = { type: "a" };
type Y = { type: "b" };

type Z = X & Y;
