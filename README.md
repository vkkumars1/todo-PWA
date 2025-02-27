# 📌 To-Do List PWA

A **Progressive Web App (PWA)** for managing daily tasks efficiently, even without an internet connection. This To-Do app supports **offline mode, caching, push notifications, and local storage** to enhance the user experience.

---

## 🚀 Features

### ✅ Task Management
- Add new tasks with ease
- Edit task names
- Mark tasks as completed
- Delete tasks when done

### 📶 Offline Functionality
- Works even without an internet connection
- Stores tasks locally using **LocalStorage**
- Uses **Service Workers** to cache essential files

### 📱 PWA Features
- **Installable on mobile & desktop**
- **App Manifest** for custom icons & splash screen
- **Push Notifications** to remind users of pending tasks

### 🎨 User Interface & Experience
- **Responsive design** for all screen sizes
- **Dark/Light mode toggle**
- **Minimal & clean UI** for distraction-free task management

---

## 🏗️ Project Structure
```
📁 To-Do PWA  
 ├── 📁 assets/        → Icons, manifest, and styles  
 ├── 📁 js/            → JavaScript files (logic & service worker)  
 ├── index.html        → Main UI  
 ├── styles.css        → Styling for UI  
 ├── manifest.json     → PWA configuration  
 ├── service-worker.js → Offline support & caching  
```

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Storage:** Local Storage for task persistence
- **PWA Enhancements:** Service Workers & Push Notifications

---

## 📥 Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-pwa.git
   ```
2. Open `index.html` in a browser.
3. To install as a PWA, click the **Install App** button in the browser.

---

## 📌 How It Works
1. **Adding Tasks:** Type a task and click "Add".
2. **Marking Tasks:** Click the checkbox to mark as done.
3. **Offline Mode:** Tasks remain stored even without the internet.
4. **Push Notifications:** Get task reminders when enabled.

