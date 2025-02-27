# 📌 To-Do List PWA

A lightweight, offline-ready **Progressive Web App (PWA)** designed for seamless task management with caching, push notifications, and installable app features. ✅🚀

---

## 📂 Site Map

Since this is a **frontend-only** PWA, it follows a **single-page application (SPA)** structure, dynamically updating content without requiring multiple pages.

```
📂 Home (/)
│── 📝 To-Do List Section
│     ├── Add Task
│     ├── Edit Task
│     ├── Delete Task
│     ├── Mark as Complete
│── 📂 Offline Page (/offline.html)
│── ⚙️ Settings (Inside Home Page)
│     ├── Enable/Disable Push Notifications
│     ├── Clear Completed Tasks
│── 📜 About Page (/about.html)
│── 📜 Privacy Policy (/privacy.html)
│── 📂 Service Worker (Handles offline & caching)
│── 📂 Web Manifest (For installation)
```

---

## 💡 Page Breakdown & Hierarchy

### 1️⃣ Home (/)
The **main PWA page** displaying the **To-Do List UI**.
- Users can **add, update, delete, and mark tasks as complete**.
- Uses **LocalStorage** for persistent task management.

🔗 **Interconnects with:**
- **Service Worker** (for caching and offline mode)
- **Push Notification API** (for task reminders)
- **IndexedDB/LocalStorage** (for data persistence)

### 2️⃣ Offline Page (/offline.html)
Displayed when the user **loses internet connection**.
- Shows a **custom message** and allows users to view cached tasks.

🔗 **Interconnects with:**
- **Service Worker** (to detect offline mode)

### 3️⃣ Settings (Inside Home Page)
A **modal-based settings section** for user preferences.
- **Enable/disable push notifications**.
- **Clear completed tasks**.

🔗 **Interconnects with:**
- **Home Page** (Accessible via settings button)
- **Web Push API** (for notifications management)

### 4️⃣ About Page (/about.html)
Displays information about the app, its features, and how it works.

🔗 **Interconnects with:**
- **Home Page** (Footer link)

### 5️⃣ Privacy Policy (/privacy.html)
Details on data storage, notifications, and offline caching policies.

🔗 **Interconnects with:**
- **Home Page** (Footer link)

---

## 📌 Navigation Flow

1. User **opens the app (/) → interacts with the to-do list**.
2. User **goes offline → Offline page (/offline.html) appears**.
3. User **enables push notifications** in settings → Push API stores the preference.
4. User **installs the app** → Web App Manifest provides an install prompt.

---

## 📌 Summary of Page Interconnections

| Page | Linked To |
|------------|-----------------------------|
| **Home (/)** | Offline Page, Settings, About, Privacy |
| **Offline Page (/offline.html)** | Home |
| **Settings (Inside Home)** | Push Notifications, LocalStorage |
| **About (/about.html)** | Home |
| **Privacy Policy (/privacy.html)** | Home |

---

## 🎯 Key Features
✅ **Offline Mode** – Works without internet using service workers.  
✅ **Push Notifications** – Alerts users of upcoming tasks.  
✅ **Local Storage** – Saves tasks even after closing the app.  
✅ **Installable PWA** – Can be added to the home screen like a native app.  
✅ **Responsive UI** – Works on all devices and screen sizes.  

---

This structured **site map and feature breakdown** ensures a smooth and efficient PWA experience with a **minimalist design** and **essential functionalities**! 🚀

