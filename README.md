# 🧭 Mafqoodaty – Web App

**Mafqoodaty** is a Lost & Found web application built with the **MERN stack**, designed to help people report, discover, and recover lost items efficiently through a simple and intuitive interface.

The platform allows users to post lost or found items, browse reports, and connect with others to reunite belongings with their owners.

---

## ✨ Features

* 🔍 **Post Lost & Found Items** with details and images
* 🗂️ **Browse & Search Listings** easily
* 👤 **User Authentication & Authorization**
* 🕒 **Real-time & Updated Listings**
* 📱 **Responsive UI** for desktop and mobile
* 🔐 **Secure API & Data Handling**

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5, CSS3
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Other Tools

* JWT Authentication
* RESTful API
* Git & GitHub

---

## 🚀 Getting Started

> 🔗 Live URL: https://mafqoodaty.netlify.app/

### Prerequisites

Make sure you have:

* Node.js
* MongoDB
* npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mafqoodaty.git

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Running the App

```bash
# Run backend
cd server
npm run dev

# Run frontend
cd client
npm start
```

The app will be available at:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:3000`

---

## 🧠 Motivation

Losing personal belongings is stressful and frustrating.
**Mafqoodaty** aims to simplify the process of reporting and finding lost items by providing a centralized, easy-to-use platform for the community.

---

## 🔮 Future Improvements

* 📍 Location-based search & filtering
* 💬 In-app messaging between users
* 🧠 AI-assisted item matching
* 📲 Mobile app version

---

## 📂 Project Structure
```
├── 📁 client
│   ├── 📁 public
│   │   ├── 📄 _redirects
│   │   ├── 🖼️ fav.png
│   │   ├── 🖼️ icon.png
│   │   ├── 🖼️ preview.png
│   │   ├── ⚙️ sitemap.xml
│   │   └── 🖼️ square.png
│   ├── 📁 src
│   │   ├── 📁 api
│   │   │   ├── 📄 axios.js
│   │   │   ├── 📄 posts.js
│   │   │   └── 📄 upload.js
│   │   ├── 📁 assets
│   │   │   ├── 🖼️ gLogo.png
│   │   │   ├── 🖼️ logoText.png
│   │   │   └── 🖼️ wLogo.png
│   │   ├── 📁 components
│   │   │   ├── 📄 Description.jsx
│   │   │   ├── 📄 EditCard.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   ├── 📄 HomeCard.jsx
│   │   │   ├── 📄 ImagePrev.jsx
│   │   │   ├── 📄 LoadingPost.jsx
│   │   │   ├── 📄 LoadingPostGrid.jsx
│   │   │   ├── 📄 Menu.jsx
│   │   │   ├── 📄 Nav.jsx
│   │   │   ├── 📄 PasswordCard.jsx
│   │   │   ├── 📄 Post.jsx
│   │   │   ├── 📄 PostCard.jsx
│   │   │   ├── 📄 PostGrid.jsx
│   │   │   ├── 📄 PostMenu.jsx
│   │   │   ├── 📄 PrimaryBtn.jsx
│   │   │   ├── 📄 Screen.jsx
│   │   │   ├── 📄 SearchBar.jsx
│   │   │   ├── 📄 TabNav.jsx
│   │   │   ├── 📄 TagContainer.jsx
│   │   │   ├── 📄 Tags.jsx
│   │   │   └── 📄 TopOfPost.jsx
│   │   ├── 📁 constants
│   │   │   └── 📄 baseURL.js
│   │   ├── 📁 context
│   │   │   └── 📄 postContext.jsx
│   │   ├── 📁 functions
│   │   │   └── 📄 formatDate.jsx
│   │   ├── 📁 hooks
│   │   │   └── 📄 useApi.js
│   │   ├── 📁 pages
│   │   │   ├── 📄 AddPost.jsx
│   │   │   ├── 📄 Home.jsx
│   │   │   └── 📄 Landing.jsx
│   │   ├── 🎨 App.css
│   │   ├── 📄 App.jsx
│   │   └── 📄 main.jsx
│   ├── ⚙️ .gitignore
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   └── 📄 vite.config.js
├── 📁 server
│   ├── 📁 config
│   │   └── 📄 cloudinary.js
│   ├── 📁 middleware
│   │   ├── 📄 admin.js
│   │   ├── 📄 auth.js
│   │   ├── 📄 joiValidation.js
│   │   └── 📄 limiter.js
│   ├── 📁 model
│   │   └── 📄 post.js
│   ├── 📁 routes
│   │   └── 📄 posts.js
│   ├── 📁 utils
│   │   └── 📄 cloudinary.js
│   ├── 📁 validation
│   │   └── 📄 post.js
│   ├── ⚙️ .gitignore
│   ├── 📄 index.js
│   ├── ⚙️ package-lock.json
│   └── ⚙️ package.json
└── 📝 README.md
```

---

## 👨‍💻 Author

**Hasan Alasker**
Front-end Engineer • UI/UX Designer • Software Engineer

* 🌐 Portfolio: [https://hasan-alasker.netlify.app](https://hasan-alasker.netlify.app)
* 💼 LinkedIn: [https://www.linkedin.com/in/hasan-alasker-58682335a/](https://www.linkedin.com/in/hasan-alasker-58682335a/)
* 📧 Email: [hasanalasker.contact@gmail.com](mailto:hasanalasker.contact@gmail.com)

---
