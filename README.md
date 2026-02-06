<img width="1915" height="910" alt="Screenshot 2026-02-06 105231" src="https://github.com/user-attachments/assets/304fead6-559a-452f-a157-ff6122b1f0e1" />

🧩 EJS CRUD Application (Express.js)

A simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, and EJS.
This project demonstrates server-side rendering, routing, form handling, and basic UI styling with external CSS

🚀 Features

📄 View list of items

➕ Add new items


✏️ Edit existing items

❌ Delete items

🎨 External CSS for UI

🧠 In-memory data storage (no database)

🛠️ Tech Stack

Node.js

Express.js

EJS (Embedded JavaScript Templates)

HTML & CSS

📁 Project Structure
project/
│
├── server.js
│
├── views/
│   ├── index.ejs
│   ├── add.ejs
│   └── edit.ejs
│
├── public/
│   └── css/
│       └── style.css
│
├── package.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <your-repo-url>

2️⃣ Navigate to the project folder
cd project

3️⃣ Install dependencies
npm install

4️⃣ Start the server
node server.js

🌐 Run the Application

Open your browser and visit:

http://localhost:5000

🧪 CRUD Routes
Method	Route	Description
GET	/	View all items
GET	/add	Add item page
POST	/add	Add new item
GET	/edit/:id	Edit item page
POST	/edit/:id	Update item
GET	/delete/:id	Delete item
📌 Notes

Data is stored temporarily in memory, so it resets when the server restarts.

This project is ideal for learning Express, EJS, and CRUD concepts.

Can be easily extended with a database like MongoDB or MySQL.

✨ Future Improvements

🔐 Add database support

🎨 Improve UI with Bootstrap or Tailwind

🔔 Add delete confirmation popup

📱 Make fully responsive

✅ Form validation

👨‍💻 Author

Yashvi
Full Stack Development Student
