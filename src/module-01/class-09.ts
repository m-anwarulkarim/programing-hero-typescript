// Destructuring in typescript of arry & object
const user = {
  name: "Anwarul Karim",
  age: 22,
  contact: {
    email: "anwarul@example.com",
    phone: {
      primary: "+8801712345678",
      secondary: "+8801999888777",
    },
  },
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

const {
  contact: {
    phone: { primary },
  },
} = user;
// console.log(primary);

const fruits = [" Apple", " Banana", " Grapes", " Watermelon", " Orange"];

const [, , , Watermelon] = fruits;
// console.log(Watermelon);

const students = [
  ["Anwarul", [85, 90, 88]], // name + scores array
  ["Samiul", [78, 82, 80]],
  ["Rafi", [92, 89, 94]],
];
const [, Samiul] = students;
console.log(Samiul);
