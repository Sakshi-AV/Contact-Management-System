# 📇Contact Management System
A contact management application with encrypted login, avatar-based contacts, real-time search and sorting, and a modern dark glassmorphism UI built using HTML, CSS, and JavaScript.
## 📌 Project Overview
This project simulates a real-world contact management system using only frontend technologies. It includes a secure login interface where passwords are hashed before validation, contact CRUD operations (Create, Read, Update, Delete), and persistent data storage using LocalStorage. Each contact is displayed with an automatically generated avatar based on the first letter of the name, similar to popular applications like Gmail and Slack.
The application is designed with a dark-only glassmorphism UI and smooth animations to enhance user experience, demonstrating strong frontend fundamentals and clean JavaScript logic without relying on any backend services.
## 🚀 Key Features
* 🔐 Encrypted login authentication (hash-based, demo)
* ➕ Add, ✏️ edit, 🗑️ delete contacts
* 👤 Avatar generation using contact initials
* 🔍 Real-time search by name or phone
* 🔤 Alphabetical sorting (A–Z / Z–A)
* 🌙 Dark glassmorphism UI with animations
* 💾 LocalStorage-based data persistence
* 📱 Responsive design
## 🛠️ Technologies Used
* 🌐 HTML5
* 🎨 CSS3 (Dark UI, Glassmorphism, Animations)
* ⚙️ JavaScript 
* 💾 Browser LocalStorage
## 📁 Project Structure
```bash
Contact-Manager/
├── login.html      #  Login page
├── index.html      #  Contact dashboard
├── style.css       #  Dark UI & animations
├── login.js        #  Authentication logic
├── script.js       #  Contact CRUD, search & sort
└── README.md
```
## 🔑 Demo Credentials
Username: admin

Password: admin123
## 💡How to Use
1. Enter Name,Phone Number in the form.

2. Click Add Contact → The contact will appear in the list.

3. Use the Search input to filter contacts by name or phone.

4. Click Delete to remove a contact or Edit to edit the contact details.

5. Refresh the page → Contacts remain because of local storage.
## 🔮 Future Enhancements
* 🚪 Logout functionality
* ✅ Phone & email validation
* 📤 Export contacts to CSV
* 🌐 Backend integration

