// 🌟 Enum বনাম as const
// ===============================================
// 🔹 আমরা জানি enum দিয়ে নির্দিষ্ট মানের তালিকা তৈরি করা যায়।
// 🔹 কিন্তু TypeScript-এর "as const" দিয়েও একই কাজ করা সম্ভব,
//    এবং অনেক সময় আরও হালকা ও টাইপ-সেফ উপায়ে করা যায়।

// ==================================================
// 🧩 ১️⃣ Enum পদ্ধতি
// ==================================================
/*
Enum মানে হলো নির্দিষ্ট কিছু মানের সেট বা তালিকা।
এখানে আমরা ইউজারের role অনুযায়ী access নিয়ন্ত্রণ করছি।
*/

enum UserRoleEnum {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const checkAccessByEnum = (role: UserRoleEnum) => {
  if (role === UserRoleEnum.Admin) return "🔑 Full Access Granted!";
  if (role === UserRoleEnum.Editor) return "🛠️ Limited Access Granted!";
  return "👀 View Only Access!";
};

// ✅ সঠিকভাবে কাজ করবে
console.log(checkAccessByEnum(UserRoleEnum.Admin));

/*
📌 Enum ব্যবহারের অসুবিধা:
----------------------------------
1️⃣ Enum compile হওয়ার সময় JavaScript কোডে রূপান্তরিত হয়,  
    ফলে bundle size কিছুটা বেড়ে যায়।
2️⃣ Enum-এর reverse mapping (value → key lookup) কখনো বিভ্রান্তিকর হয়।
3️⃣ অনেক সময় enum-এর behavior জটিল লাগে।
4️⃣ Modern TypeScript-এ একই কাজ আমরা `const object + as const` দিয়েও করতে পারি,
    যা বেশি হালকা এবং টাইপ-সেফ।
*/

// ==================================================
// 🧩 ২️⃣ as const পদ্ধতি (object literal দিয়ে)
// ==================================================
/*
এখানে আমরা enum-এর পরিবর্তে একটা সাধারণ object ব্যবহার করেছি।
`as const` ব্যবহারের মাধ্যমে আমরা object টাকে “readonly constant” বানিয়ে দিয়েছি।

👉 মানে:
- এর key ও value দুটোই অপরিবর্তনীয় (immutable)
- TypeScript আর এই মানগুলোকে general string type হিসেবে “widen” করবে না।
*/

const UserRoleAsConst = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

// ✅ এখন TypeScript জানে:
// typeof UserRoleAsConst = {
//   readonly Admin: "Admin";
//   readonly Editor: "Editor";
//   readonly Viewer: "Viewer";
// }

const checkAccessByAsConst = (role: keyof typeof UserRoleAsConst) => {
  if (role === "Admin") return "🔑 Full Access Granted!";
  if (role === "Editor") return "🛠️ Limited Access Granted!";
  return "👀 View Only Access!";
};

// ✅ কাজ করবে
console.log(checkAccessByAsConst("Admin"));

/*
📘 এখানে কী ঘটছে:
----------------------------------
- আমরা `keyof typeof UserRoleAsConst` ব্যবহার করেছি,
  যার মানে: role শুধুমাত্র এই object-এর key গুলোর মধ্যে হতে পারবে।
- `as const` দিয়ে নিশ্চিত করেছি যে প্রতিটি key ও value fixed থাকবে।
*/

// ==================================================
// 🧩 ৩️⃣ আরও টাইপ-সেফ সংস্করণ (value টাইপ হিসেবে ব্যবহার)
// ==================================================
/*
এখন আমরা চাই role শুধুমাত্র এই object-এর value থেকে নেওয়া হোক,
key নয় — অর্থাৎ value: "ADMIN" | "EDITOR" | "VIEWR"।
*/

const UserRoleAsConst1 = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWR",
} as const;

/*
typeof UserRoleAsConst1 = {
  readonly Admin: "ADMIN";
  readonly Editor: "EDITOR";
  readonly Viewer: "VIEWR";
}

keyof typeof UserRoleAsConst1 = "Admin" | "Editor" | "Viewer"

(typeof UserRoleAsConst1)[keyof typeof UserRoleAsConst1]
= "ADMIN" | "EDITOR" | "VIEWR"
*/

const checkAccessByAsConst1 = (
  role: (typeof UserRoleAsConst1)[keyof typeof UserRoleAsConst1]
) => {
  if (role === UserRoleAsConst1.Admin) return "🔑 Full Access Granted!";
  if (role === UserRoleAsConst1.Editor) return "🛠️ Limited Access Granted!";
  return "👀 View Only Access!";
};

// ✅ কাজ করবে
console.log(checkAccessByAsConst1("ADMIN"));

/*
===============================================
💬 Enum বনাম as const তুলনা (Summary)
===============================================

| বিষয়                 | Enum                                | as const                           |
|-----------------------|-------------------------------------|------------------------------------|
| Compilation Output     | JS-এ কোড তৈরি হয়                  | Compile-time-only, কোনো JS কোড না |
| Performance            | Bundle size সামান্য বাড়ে           | হালকা ও দ্রুত                     |
| Maintainability        | আলাদা enum structure লাগে           | সাধারণ object দিয়েই কাজ চলে      |
| Type Safety            | Type-safe                           | আরও বেশি type-safe                 |
| Auto Suggest           | আছে                                | আছে                               |
| জটিলতা                 | কিছুটা বেশি                         | কম ও সরল                          |

✅ সহজভাবে:
- ছোট প্রজেক্ট → `as const`
- বড় প্রজেক্ট বা যেখানে enum এর structure দরকার → `enum`
*/
