# 🛍️ Shopperoo - Shopping Website

Shopperoo is a modern, full-stack e-commerce web application designed with scalability and CI/CD in mind. Built with React for the frontend, Node.js (or NestJS) for the backend, MongoDB/PostgreSQL for the database, and containerized using Docker. CI/CD is implemented using CircleCI with automated image deployment to DockerHub.

---

## 🚀 Features

- 🛒 Product listing, filtering, and cart functionality
- 🧾 User authentication
- 🔧 Backend API with Node.js/NestJS
- 💅 Frontend built with React.js
- 🐳 Containerized using Docker and Docker Compose
- 🔄 CI/CD pipeline using CircleCI
- 📦 DockerHub image deployment
- 🌐 Fully connected frontend & backend via environment configs

---

## 📦 Tech Stack

| Layer            | Tech                   |
| ---------------- | ---------------------- |
| Frontend         | React.js               |
| Backend          | Node.js / NestJS       |
| Database         | MongoDB / PostgreSQL   |
| Containerization | Docker, Docker Compose |
| CI/CD            | CircleCI               |
| Image Registry   | DockerHub              |

---

## 🧰 Prerequisites

- Docker & Docker Compose installed
- Node.js and npm installed (for local development)
- DockerHub account (for pushing images)
- CircleCI account (for CI/CD integration)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yesiamkriti/shopperoo.git
cd shopperoo

```

2. Set up Environment Variables
   Create .env files in both frontend/ and backend/ directories with necessary config:

backend/.env

```bash
PORT=5000
DB_URL=mongodb://mongo:27017/shopperoo || MONGO_URL
```

frontend/.env

```bash
REACT_APP_API_URL=http://localhost:5454
```

3. Run with Docker Compose

```bash
docker-compose up --build
```

App will be available at:
Frontend: http://localhost:3000
Backend API: http://localhost:5454

🐳 DockerHub Deployment
Docker images are automatically built and pushed to DockerHub via CircleCI.

To manually build and push:

```bash
# Backend
docker build -t yourdockerhub/shopperoo-backend ./backend
docker push yourdockerhub/shopperoo-backend

# Frontend
docker build -t yourdockerhub/shopperoo-frontend ./frontend
docker push yourdockerhub/shopperoo-frontend
```

🔄 CircleCI Pipeline
CircleCI is used to automate:

Build of Docker images

Push to DockerHub

.circleci/config.yml handles:

Docker build and push

Secrets via CircleCI Environment Variables (DOCKER_USER, DOCKER_PASS)

📸 Screenshots
Include:
CircleCI success build
DockerHub pushed images
App running in browser

📚 Documentation
Docker Documentation
CircleCI Docs
React Docs
Node.js Docs

🙋‍♂️ Author
Your Name
GitHub: @yesiamkriti
DockerHub: dockerhub.com/yesiamkriti

📝 License
This project is licensed under the MIT License.
