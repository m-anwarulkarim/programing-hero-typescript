/* ✅ Interface কি?

Interface basically একটা object এর structure declare করার জন্য সবচেয়ে উপযোগী জিনিস।
যেন TypeScript-কে বলছো:
“এই object এ কী কী property থাকবে, কী টাইপ হবে, তার rules এখানে দিলাম।”

✅ Example:
interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

const person: User = {
  name: "Anwar",
  age: 22
};


এটা দেখে TS জানবে person object এ name আর age থাকতে হবে।


*/
