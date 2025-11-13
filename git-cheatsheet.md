# 🌟 Git Interactive Cheatsheet – Beginner Friendly

> 🚀 A step-by-step guide to learning Git with commands, outputs, tips, and exercises.  
> Perfect for beginners who want to **practice Git confidently**.

---

## 🧭 Overview

**What you’ll learn:**  
✅ Step-by-step Git commands  
📤 Real Output examples  
💡 Pro Tips and Warnings  
🎯 Practice exercises  
🌿 Advanced Git usage

---

## 1️⃣ Check Git Installation & Version

```bash
git -v
```

**💻 Output:**

```
git version 2.51.0.windows.1
```

**💡 Tips:**

- নিশ্চিত করুন Git ইনস্টল আছে।
- Update করতে চাইলে Git-এর অফিসিয়াল ওয়েবসাইট থেকে নতুন ভার্সন ডাউনলোড করুন।

**🎯 Practice:**  
Check Git version on your own machine.

---

## 2️⃣ Configure User Details

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

**💡 Tips:**

- Commit এর author name এবং email সেট হয়।
- যাচাই করতে:
  ```bash
  git config --get user.name
  git config --get user.email
  ```

**🎯 Practice:**  
নিজের নাম ও ইমেইল সেট করে তা যাচাই করুন।

---

## 3️⃣ Initialize a New Repository

```bash
git init
```

**💻 Output:**

```
Initialized empty Git repository in <path>/.git/
```

**💡 Tips:**

- এটি `.git` নামে একটি hidden folder তৈরি করে যেখানে Git সব তথ্য সংরক্ষণ করে।

**🎯 Practice:**  
নতুন একটি ফোল্ডারে এই কমান্ড চালান এবং `.git` ফোল্ডারটি দেখুন।

---

## 4️⃣ Create & Edit a File

```bash
touch test.txt
vi test.txt
```

**💡 Tips:**

- `touch` → নতুন ফাইল তৈরি করে
- `vi` → ফাইল edit করার জন্য
  - `i` → insert mode
  - `Esc + :wq` → save & exit

**🎯 Practice:**  
একাধিক ফাইল তৈরি করুন এবং কিছু টেক্সট লিখুন।

---

## 5️⃣ Check Git Status

```bash
git status
```

**💻 Output:**

```
On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
  test.txt
```

**💡 Tips:**

- Untracked মানে ফাইল এখনো Git এ ট্র্যাক হচ্ছে না।
- পরিবর্তন হলে `modified` দেখাবে।

**🎯 Practice:**  
একটা ফাইল edit করে `git status` চালান।

---

## 6️⃣ Add Files to Staging Area

```bash
git add .
# or
git add test.txt
```

**💡 Tips:**

- `git add .` → সব ফাইল stage করবে
- `git add <file>` → নির্দিষ্ট ফাইল stage করবে

**🎯 Practice:**  
বিভিন্ন ফাইল add করুন এবং আবার `git status` দেখুন।

---

## 7️⃣ Commit Changes

```bash
git commit -m "Initial commit"
```

**💻 Output:**

```
[master (root-commit) <hash>] Initial commit
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 test.txt
```

**💡 Tips:**

- ছোট কিন্তু বর্ণনামূলক commit message ব্যবহার করুন।

**🎯 Practice:**  
একাধিক commit তৈরি করুন এবং ভিন্ন ভিন্ন মেসেজ দিন।

---

## 8️⃣ View Commit History

```bash
git log
git log --oneline
```

**💡 Tips:**

- `git log` → বিস্তারিত commit history
- `git log --oneline` → সংক্ষিপ্তভাবে commit তালিকা

**🎯 Practice:**  
৩-৪টি commit করার পর history দেখুন।

---

## ⚡ Pro Tips

🔹 Step 4–6 এর অনেক command silent থাকে (কোন output দেয় না)  
🔹 Commit করার আগে সবসময় `git status` চেক করুন  
🔹 Regular commit করুন — বড় পরিবর্তন জমিয়ে রাখবেন না  
🔹 Visual graph দেখতে পারেন:

```bash
git log --graph --oneline --all
```

---

## 🧩 Advanced Git Commands

### 🔁 Undo / Reset

```bash
git reflog
git reset --hard <commit_hash>
```

**💡 Tips:**

- `git reflog` → commit history (HEAD movement) দেখায়
- `git reset --hard` → নির্দিষ্ট commit এ ফিরে যায় (সব পরিবর্তন মুছে দেয়)

**⚠️ সতর্কতা:**  
`--hard` ব্যবহার করলে unstaged changes মুছে যাবে!

---

### 🗑️ Remove Files

```bash
git rm test.txt
git rm --cached test.txt
```

**💡 পার্থক্য:**

- `git rm` → working directory থেকে ফাইল মুছে দেয়
- `git rm --cached` → শুধুমাত্র staging থেকে remove করে, লোকাল ফাইল থাকে

---

### 🌿 Branch Management

```bash
git branch --list
git branch <branchName>
git switch <branchName>
git branch -a
git merge <branchName>
git branch -m <newName>
git branch -d <branchName>
git branch -D <branchName>
```

**💡 Tips:**

- `git branch` → branch তালিকা
- `git switch` → branch পরিবর্তন
- `git merge` → branch merge
- `-d` → safe delete
- `-D` → force delete

---

### 💾 Stash (Temporary Save Work)

```bash
git stash save "Work in progress"
git stash show -p
git stash pop
```

**💡 Tips:**

- অস্থায়ীভাবে কাজ save করে
- `git stash pop` → পুনরায় restore করে

---

## 🧠 Bonus Practice Exercise

1. Create a new project folder
2. Initialize Git
3. Add and edit 3 files
4. Stage and commit them
5. Modify one file and check `git status`
6. Use `git log --oneline` to track changes
7. Try `git branch` and `git stash` practically

---

## 📚 Summary

| Topic         | Command Example       | Purpose              |
| ------------- | --------------------- | -------------------- |
| Check version | `git -v`              | Git version check    |
| User config   | `git config --global` | Set name & email     |
| Init repo     | `git init`            | Start new repository |
| Status        | `git status`          | Show file changes    |
| Add files     | `git add .`           | Stage changes        |
| Commit        | `git commit -m`       | Save snapshot        |
| History       | `git log`             | View commits         |
| Branch        | `git branch`          | Manage branches      |
| Reset         | `git reset`           | Undo commits         |

---

## 🏁 Conclusion

✨ **Now you know how to:**

- Track files with Git
- Commit and manage changes
- Explore history and branches
- Recover lost work using reset & stash

> 🔥 Practice regularly — the best way to master Git!

---

**👨‍💻 Author:** ANWARUL KARIM
**📅 Updated:** November 2025  
**🧷 License:** Free to share & modify
