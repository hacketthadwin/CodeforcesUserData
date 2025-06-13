# 📊 Student Progress Management System (Currently 70% completed)

A full-stack web application to manage and monitor students' competitive programming progress using data from [Codeforces](https://codeforces.com).

---

## 🚀 Features

### 🧑‍🎓 Student Table View
- View all enrolled students with:
  - Name, Email, Phone, Codeforces Handle
  - Current & Max Rating
- Add, Edit, Delete student entries
- Download student data as CSV
- View detailed Codeforces profile

### 📈 Student Profile View
On clicking a student row:
1. **Contest History**
   - Filters: Last 30, 90, or 365 days
   - Rating graph
   - Contest list with rank, rating change & unsolved problems

2. **Problem Solving Analytics**
   - Filters: Last 7, 30, or 90 days
   - Most difficult problem solved
   - Total problems, average rating, problems/day
   - Bar chart by rating bucket
   - Submission heatmap

### 🔄 Codeforces Data Sync
- Daily data sync using Cron (default: 2 AM)
- On-handle update → triggers real-time sync
- Show `lastSynced` timestamp on main table

### 📧 Inactivity Detection
- Detect students inactive for 7+ days
- Auto email reminders
- Show count of reminders sent
- Option to disable emails for individuals

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Chart.js / Recharts
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Cron Job:** node-cron
- **Emailing:** Nodemailer
- **Codeforces API**

---

## 📁 Project Structure

