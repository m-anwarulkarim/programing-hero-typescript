// 1. Type Alias

//  TypeScript এ type alias মানে হলো
// একটা টাইপকে নিজের মতো করে একটা নতুন নাম দেওয়া।

// ✅ Object এর Type Alias
type User1 = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user1: User1 = {
  name: "Anwar",
  age: 23,
  isAdmin: true,
};

// ✅ Array এর Type Alias
type Numbers = number[];
const scores: Numbers = [10, 20, 30];

// ✅ Function Type Alias

type AddFn = (a: number, b: number) => number;
const add: AddFn = (a, b) => a + b;

// ✅ Nested / Complex Type Alias

type Address = {
  city: string;
  zip: number;
};

type User = {
  name: string;
  address: Address;
};

const u: User = {
  name: "Siam",
  address: {
    city: "Dhaka",
    zip: 1200,
  },
};
