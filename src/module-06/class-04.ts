// =====================================================
// ✅ GENERIC with INTERFACE (সহজ ব্যাখ্যা)
// =====================================================

/*
Generics Interface মানে:
Interface-এর কোনো property-এর টাইপ fixed থাকবে না।
ব্যবহারকারী যখন interface ব্যবহার করবে, তখনই টাইপ ঠিক করবে।
*/

// -----------------------------------------------------
// ✅ Example 1: Generic Interface (Single Generic Type)
// -----------------------------------------------------
interface User<T> {
  data: T; // data-এর টাইপ flexible (generic)
  age: number; // normal property
}

// ✅ Single Object হিসেবে Generic ব্যবহার
const userResponse: User<{ id: number; name: string }> = {
  data: { id: 1, name: "Anwar" },
  age: 200,
};

// ✅ Array হিসেবে Generic ব্যবহার
const postsResponse: User<{ id: number; title: string }[]> = {
  data: [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ],
  age: 200,
};

// -----------------------------------------------------
// ✅ Example 2: Generic Interface with Different Details
// -----------------------------------------------------
interface Product<T> {
  id: number;
  name: string;
  details: T; // details-এর টাইপও flexible
}

// ✅ Simple details
const product1: Product<{ price: number; inStock: boolean }> = {
  id: 101,
  name: "Laptop",
  details: {
    price: 55000,
    inStock: true,
  },
};

// ✅ Complex details
const product2: Product<{ price: number; colors: string[]; warranty: string }> =
  {
    id: 102,
    name: "Smartphone",
    details: {
      price: 25000,
      colors: ["black", "white", "blue"],
      warranty: "1 year",
    },
  };

// =====================================================
// ✅ Example 3: DeveloperProfile with 1 Generic Type
// =====================================================
interface DeveloperProfile<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
  };
  smartWatch: T; // smartwatch-এর টাইপ generic
}

// Sub-interface (smartWatch-এর structure)
interface SmartWatch {
  heartRate: string;
  stopWatch: boolean;
}

// ✅ Example Developer
const poorDeveloper: DeveloperProfile<SmartWatch> = {
  name: "Anwar Karim",
  salary: 100000,
  device: {
    brand: "Apple",
    model: "MacBook Pro 16",
  },
  smartWatch: {
    heartRate: "75 bpm",
    stopWatch: true,
  },
};

// =====================================================
// ✅ Example 4: DeveloperProfile2
// ✅ Multiple Generics (SmartWatch + Bike)
// ✅ Default Generic Value দেওয়া আছে
// =====================================================

interface DeveloperProfile2<SmartWatchType, BikeType = undefined> {
  name: string;
  salary: number;
  device: Device;
  smartWatch: SmartWatchType; // generic
  bike?: BikeType; // optional generic
}

// Device interface
interface Device {
  brand: string;
  model: string;
}

// SmartWatch type
interface SmartWatch {
  heartRate: string;
  stopWatch: boolean;
}

// Bike type
interface Bike {
  brand: string;
  model: string;
  cc: number;
}

// ✅ Example Developer with 2 Generic Types
const developer: DeveloperProfile2<SmartWatch, Bike> = {
  name: "Anwar Karim",
  salary: 100000,
  device: {
    brand: "Apple",
    model: "MacBook Pro 16",
  },
  smartWatch: {
    heartRate: "75 bpm",
    stopWatch: true,
  },
  bike: {
    brand: "Honda",
    model: "CBR 500R",
    cc: 500,
  },
};
