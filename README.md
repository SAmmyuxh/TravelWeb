# ✈️ TravelWeb - Full-Stack Travel Platform

![TravelWeb Banner](https://user-images.githubusercontent.com/72949889/228864758-a5b82545-8418-4c3e-9e7f-639a7b9735d4.png) <!--- Replace with your own project banner/screenshot --->

<p align="center">
  <a href="https://github.com/SAmmyuxh/TravelWeb/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/SAmmyuxh/TravelWeb?style=for-the-badge&color=blue" alt="License">
  </a>
  <a href="https://github.com/SAmmyuxh/TravelWeb/issues">
    <img src="https://img.shields.io/github/issues/SAmmyuxh/TravelWeb?style=for-the-badge&color=brightgreen" alt="Issues">
  </a>
  <a href="https://github.com/SAmmyuxh/TravelWeb/pulls">
    <img src="https://img.shields.io/github/issues-pr/SAmmyuxh/TravelWeb?style=for-the-badge&color=orange" alt="Pull Requests">
  </a>
</p>

**TravelWeb** is a feature-rich, full-stack travel website built with the MERN stack. It provides a seamless user experience for exploring global destinations, viewing top-selling travel packages, and interacting with dynamic content served from a robust backend API.

### 🌐 Live Demo
- **Frontend:** [**https://travel-web-xgrj.vercel.app/**](https://travel-web-xgrj.vercel.app/)
- **Backend API:** [**https://travelweb-backend.onrender.com/api**](https://travelweb-backend.onrender.com/api)

---

## ✨ Key Features

- **Dynamic Content:** Explore travel packages and destinations fetched in real-time from the backend.
- **Top-Selling Packages:** A dedicated section to highlight the most popular travel deals.
- **Responsive Design:** Fully responsive and mobile-first interface built with Tailwind CSS.
- **RESTful API:** A well-structured backend API built with Express.js and Mongoose for data management.
- **Scalable Architecture:** Decoupled frontend and backend, allowing for independent scaling and deployment.

---

## 🛠️ Technology Stack

| Category      | Technology                                                                                                  |
|---------------|-------------------------------------------------------------------------------------------------------------|
| **Frontend**  | `React.js`, `Tailwind CSS`, `Axios`                                                                         |
| **Backend**   | `Node.js`, `Express.js`, `MongoDB`                                                                          |
| **Database**  | `MongoDB` with `Mongoose` ODM                                                                               |
| **Deployment**| **Frontend:** `Vercel` / **Backend:** `Render`                                                              |

---

## 🚀 Getting Started (Local Development)

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- A [MongoDB URI](https://www.mongodb.com/cloud/atlas/register) (from MongoDB Atlas or a local instance)

### 1. Clone the Repository

```bash
git clone https://github.com/SAmmyuxh/TravelWeb.git
cd TravelWeb
Use code with caution.
Markdown
2. Backend Setup
The backend server connects to the MongoDB database and serves the API.
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the `backend` folder
touch .env
Use code with caution.
Bash
Now, add the following environment variables to your .env file.
# .env
PORT=10000
MONGO_URL=your_mongodb_connection_string
Use code with caution.
Ini
Start the backend server:
npm start
Use code with caution.
Bash
The API server should now be running on http://localhost:10000.
3. Frontend Setup
The frontend is a React application that consumes the backend API.
# Navigate to the frontend directory from the root folder
cd ../frontend

# Install dependencies
npm install

# Create a .env file in the `frontend` folder
touch .env
Use code with caution.
Bash
Add the following environment variable to your .env file to connect the frontend to your local backend server.
# .env
VITE_API_BASE_URL=http://localhost:10000
Use code with caution.
Ini
Start the frontend development server:
npm run dev
Use code with caution.
Bash
The application should now be running on http://localhost:5173 (or another port if 5173 is in use).
📄 API Endpoints
The backend provides the following REST API endpoints.
Method	Endpoint	Description
GET	/api/packages	Fetches all travel packages.
GET	/api/packages/:id	Fetches a single package by its ID.
GET	/api/destinations	Fetches all available destinations.
GET	/api/destinations/:id	Fetches a single destination by ID.
☁️ Deployment
This project is configured for easy deployment on Vercel (Frontend) and Render (Backend).
Deploying the Backend on Render
Push your code to a GitHub repository.
Create a new "Web Service" on Render and connect it to your repository.
Set the Build Command to npm install.
Set the Start Command to npm start.
Under "Environment Variables", add the MONGO_URL and PORT from your .env file.
Deploying the Frontend on Vercel
Push your code to a GitHub repository.
Create a new project on Vercel and connect it to your repository.
Vercel will automatically detect that it's a React (Vite) project.
Under "Environment Variables", add VITE_API_BASE_URL and set its value to your deployed Render backend URL (e.g., https://travelweb-backend.onrender.com).
Deploy!
📁 Project Structure
TravelWeb/
├── backend/
│   ├── models/           # Mongoose schemas (Package.js, Destination.js)
│   ├── routes/           # API routes (packages.js, destinations.js)
│   ├── .env.example      # Example environment variables
│   ├── package.json
│   └── server.js         # Express server entry point
│
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components (Home, Destinations)
│   │   ├── App.jsx       # Main App component with routing
│   │   └── main.jsx      # React entry point
│   ├── .env.example
│   └── package.json
│
└── README.md
Use code with caution.
🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
🛡️ License
This project is open-source and distributed under the MIT License. See LICENSE for more information.
📬 Contact
Samruddh Shubhadarshi
LinkedIn: linkedin.com/in/samruddh-shubhadarshi
Email: samruddh.shubhadarshi@gmail.com



