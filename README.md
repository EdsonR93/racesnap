# 🏁 RaceSnap

RaceSnap is a **full‑stack web application** for managing race and sport event photos, designed for events with a social or charitable cause.

The platform allows:
- Administrators to manage events and users
- Photographers to upload event photos
- Participants to securely view and download only their own photos

The project is built as a **learning and portfolio project** with a strong focus on **Senior‑level engineering practices**, including CLEAN Architecture, containerized local development, async processing, and cloud readiness.

---

## 🧠 Architecture Overview

RaceSnap follows **CLEAN Architecture** principles:
Frontend (Angular)
|
v
Backend API (Node.js + Express)
|
v
Application Layer (Use Cases)
|
v
Domain Layer (Entities, Rules)
|
v
Infrastructure (MongoDB, Kafka, Azurite)
Key design goals:
- Business logic independent from frameworks
- Clear separation of concerns
- High testability
- Easy migration to cloud environments (Azure)

---

## 🧰 Tech Stack

### Backend
- Node.js
- TypeScript
- Express
- MongoDB
- JWT Authentication (Access + Refresh Tokens)
- Jest (unit testing)

### Frontend
- Angular (standalone components)
- Role‑based routing and guards

### Infrastructure
- Docker & Docker Compose
- Kafka (async processing)
- Azurite (local Azure Blob Storage emulator)

### Cloud (planned)
- Azure Container Apps or AKS
- Azure Blob Storage
- Azure Event Hubs / Service Bus
- Azure Cosmos DB

---

## 📁 Repository Structure
racesnap/
├─ backend/ # API (CLEAN Architecture)
├─ frontend/ # Angular SPA
├─ worker/ # Background workers (Kafka consumers)
├─ docker/ # Dockerfiles and scripts
├─ docs/ # Architecture and diagrams
└─ docker-compose.yml

---

## 🚀 How to Run Locally (Development)

> ⚠️ **This project is under active development.**
> Some services and features may still be placeholders.

### Prerequisites
- Docker & Docker Compose
- Node.js (LTS recommended)
- Git

---

### 1️⃣ Clone the repository

    git clone https://github.com/<your-org-or-username>/racesnap.git
    cd racesnap

### 2️⃣ Environment variables
Each service uses environment files.
Example (backend):
    
    backend/.env.dev

    PORT=3000
    MONGO_URL=mongodb://mongo:27017
    MONGO_DB_NAME=racesnap

    JWT_ACCESS_SECRET=change_me
    JWT_REFRESH_SECRET=change_me
    NODE_ENV=development

⚠️ Never commit real secrets. .env files should be git‑ignored.

### 3️⃣ Start the local stack
From the repository root:

    docker compose up --build

This will start:
- Backend API
- MongoDB
- Kafka
- Azurite (Blob Storage emulator)

### 4️⃣ Verify services
- Backend health check:
    http://localhost:3000/health

- MongoDB:
    Available internally at mongo:27017

### 🧪 Running Tests
Backend unit tests
    cd backend
    npm test

Tests focus on use cases and domain logic, not Express routes.

### 🔐 Authentication & Roles (High‑level)
Supported roles:
- SUPER_ADMIN
- EVENT_ADMIN
- PHOTOGRAPHER
- PARTICIPANT

Authentication uses:
- JWT access tokens (short‑lived)
- Refresh tokens (httpOnly cookies)

Authorization is enforced:
- At the API level (middleware)
- At the UI level (route guards)

### 📸 Photo Processing Flow (Planned / In Progress)
1. Photographer uploads photo
2. Photo stored in blob storage (Azurite locally)
3. Kafka event emitted
4. Worker consumes event
5. Thumbnail generated
6. Metadata updated
7. Participant sees thumbnail in gallery

### 🗂️ Project Management
This repository uses:
- GitHub Issues for stories, bugs, and epics
- Epics as Issues with checklists
- Labels for:
    - Area (area:backend, area:frontend, etc.)
    - Priority (prio:P0, prio:P1)
    - Epic (epic:auth, epic:events, etc.)

No GitHub Projects board is used at this time.

### 🤝 Contributing
This is a learning and portfolio project maintained by two developers.

Key rules:
- No direct pushes to main or develop
- All work via feature branches
- Pull Requests require review
- Issues should be linked from PRs

See:
- .github/ISSUE_TEMPLATE
- .github/pull_request_template.md