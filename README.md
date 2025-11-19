# ⏰ Habitify – Smart Habit Tracking Web App
<img width="960" height="540" alt="Screenshot_253" src="https://github.com/user-attachments/assets/b324b504-443e-44c5-9919-dd8f9f1ea087" />
<img width="960" height="540" alt="Screenshot_254" src="https://github.com/user-attachments/assets/4df0cb77-a9a6-4cdf-9721-b03a85a556fa" />

**Live Website:** [https://habit-tracker-6479d.web.app//](https://habit-tracker-6479d.web.app//)

Habitify is a modern Habit Tracking Web Application that helps users build positive habits through streaks, reminders, progress tracking, and a clean user-friendly dashboard.

---

## 🚀 Key Features

- **👤 User Authentication**  
  Secure login & registration using Firebase Authentication (Email/Password + Google Login)

- **📝 Habit Management (CRUD)**  
  Users can create, view, update, and delete habits

- **🌍 Public Habit Explorer**  
  Browse all public habits created by other users

- **⭐ Featured Habits**  
  Displays the newest 6 public habits from the database

- **📊 Habit Details Page**
  - Title, Description, Category, Image  
  - 30-day progress tracking  
  - Streak counter & badges  
  - Creator information  
  - “Mark Complete” button with same-day duplicate prevention

- **⏰ Habit Reminders**  
  Set custom reminder times for each habit

- **📸 Image Upload Support**  
  Upload habit images using ImgBB API

- **🔒 Private Routes**  
  Only authenticated users can access specific pages (habit details, dashboard)

- **📱 Fully Responsive UI**  
  Modern, clean interface built using Tailwind CSS & DaisyUI

---

## 🛠️ Technologies Used

### **Frontend**
- React.js  
- React Router  
- Tailwind CSS  
- DaisyUI  
- Firebase Authentication  
- React Toastify  

### **Backend**
- Node.js  
- Express.js  
- MongoDB  

---
 ## 📦 Dependencies
```json
"dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "firebase": "^12.5.0",
    "lucide-react": "^0.553.0",
    "motion": "^12.23.24",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.6",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.26.3",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.17"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "@vitejs/plugin-react": "^5.1.0",
    "daisyui": "^5.5.5",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^7.2.2"
  }
```
## 🧾 Installation (for local development)
1. Clone the repository:
   ```bash
  git clone https://github.com/shahriar429/Habit-Tracker-ph-assignment-10

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
    ```bash
    npm run dev

## 🔗 Project Links

- **Client-side Repository:**  
  https://github.com/shahriar429/Habit-Tracker-ph-assignment-10

- **Server-side Repository:**  
  [https://github.com/masrafi143/FinEase-server.git](https://github.com/shahriar429/Habit-Tracker-server)

- **Live Website:**  
  https://habit-tracker-6479d.web.app/
