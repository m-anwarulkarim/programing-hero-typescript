// ✅ Generics with function

/* 
Generics ব্যবহার করার সুবিধা:
1️⃣ Reusable: একই ফাংশন সব ধরনের টাইপে ব্যবহার করা যাবে
2️⃣ Type-Safe: ইনপুট যে টাইপ, আউটপুটও সেই টাইপ হবে
*/

/* 
✅ সমস্যা Generics ছাড়া

Generics না থাকলে একই কাজের জন্য আলাদা ফাংশন লিখতে হয়:
– string এর জন্য এক ফাংশন
– number এর জন্য আরেক ফাংশন
– object এর জন্য আরেক ফাংশন

এতে কোড বড় এবং maintain করা কঠিন হয়ে যায়
*/

// ------------------------------------
// আলাদা আলাদা ফাংশন (Generics ছাড়া)
const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithObj = (value: { id: number; name: string }) => [value];

const arrString = createArrayWithString("hello i'm anwarul karim");
const arrNumber = createArrayWithNumber(222);
const arrObj = createArrayWithObj({ id: 1, name: "anwarul karim" });

// ------------------------------------
// ✅ Generics ব্যবহার করে একই ফাংশন
const createArrayGeneric = <T>(value: T): T[] => {
  return [value];
};

// ব্যবহার
const genericArrString = createArrayGeneric("anwarul karim"); // string[]
const genericArrNumber = createArrayGeneric(232); // number[]
const genericArrObj = createArrayGeneric({ id: 1, name: "anwarul akrim" }); // object[]

// ------------------------------------
// ✅ দুইটা Generic Type: T এবং U, Tuple return
const createPair = <X, Y>(first: X, second: Y): [X, Y] => {
  return [first, second]; // tuple
};

// ব্যবহার
const pair1 = createPair("Age", 22); // [string, number]
const pair2 = createPair(true, "Active"); // [boolean, string]
const pair3 = createPair({ id: 1 }, "User"); // [{id: number}, string]

// ------------------------------------
// ✅ Generic Function with Object Merge Example
const studentCourse = <T>(studentInfo: T) => {
  return {
    name: "programming hero",
    ...studentInfo, // Generic type এর property merge
  };
};

// উদাহরণ Student Objects
const studentI1 = {
  id: 1,
  name: "anwar",
  hasPen: true,
};

const studentI2 = {
  id: 2,
  name: "karim",
  hasPen: false,
  isMarried: false,
};

// ব্যবহার
const result1 = studentCourse(studentI1);
const result2 = studentCourse(studentI2);

/* 
Output:
result1 =>: { name: "programming hero", id: 1, name: "anwar", hasPen: true }
result2 =>: { name: "programming hero", id: 2, name: "karim", hasPen: false, isMarried: false }
*/
