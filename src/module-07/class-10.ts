// ==============================
// Encapsulation কি?
// ==============================
//
// Encapsulation হলো:
// ✔ ডাটা (properties) এবং সেই ডাটার উপর কাজ করা function (method) — একসাথে রাখা
// ✔ প্রয়োজনীয় জিনিস ছাড়া সবকিছু hide করে রাখা
//
// অর্থাৎ,
// ➤ property গুলোকে private করা হয়
// ➤ বাইরের থেকে ডাটা সরাসরি পরিবর্তন করা যাবে না
// ➤ public method ব্যবহার করে ডাটার উপর কাজ করতে হবে
//
// এতে:
// ✔ ডাটা সুরক্ষিত থাকে
// ✔ ভুলভাবে কেউ ডাটা পরিবর্তন করতে পারে না
// ✔ কোড clean ও manageable থাকে
//
//
// ==============================
// বাস্তব উদাহরণ: Bank Account
// ==============================

class BankAccount {
  // balance কে private করা হলো
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // টাকা জমা দেওয়ার public method
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposit successful. New Balance = ${this.balance}`);
    }
  }

  // টাকা তোলার public method
  public withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance!");
      return;
    }
    this.balance -= amount;
    console.log(`Withdraw successful. Current Balance = ${this.balance}`);
  }

  // balance দেখার public method
  public getBalance(): number {
    return this.balance;
  }
}

// ==============================
// ব্যবহার (Testing)
// ==============================

const account = new BankAccount(1000);

// ❌ নিচের লাইনটি Error দিবে (কারণ balance private)
// account.balance = 5000;

account.deposit(500); // ✔ balance = 1500
account.withdraw(200); // ✔ balance = 1300
console.log(account.getBalance()); // ✔ 1300
