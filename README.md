# Softwins

<<<<<<< HEAD
Docker-based development environment for the softwins project.

## Docker

- Base image: Node.js 22
- OS: Debian Bookworm
- Working directory: /app

   cd /media/amirhoseyn/webcreatix/softwins
   docker run --rm -it --name softwins \
    --network webcreatix \
    -v ./softwins:/app \
    -v softwins_node_modules:/app/node_modules \
    --env-file softwins/.env \
    -w /app \
    -p 3000:3000 \
    node:22-alpine \
    npm run dev -- --hostname 0.0.0.0 --port 3000


فردا باید اول یاد بگیری چطوری فایل و متن رو اپلود کنی ، بعد چطوری روی اون فایل اپلود شده کار کنی و ذخیره کنی و یا بخونیش
=======
A developer platform focused on coding challenges, collaboration, communication, and professional developer profiles.

> Part of the WebCreatix ecosystem.

## Overview

Softwins is a platform designed for programmers to practice, collaborate, communicate, participate in coding challenges, and build a structured professional developer profile.

The project is being developed as a real-world product within the WebCreatix ecosystem.

## Core Features

* Coding challenges and programming exercises
* Developer profiles
* Collaborative programming
* Groups and communication
* Projects and developer activity
* User accounts and authentication
* Search and filtering
* Notifications
* Backend API integration
* Integration with Coreactor for code analysis and controlled processing

## Architecture

```text
Softwins
   │
   ├── Next.js / React
   │
   ├── WebCreatix Backend
   │       │
   │       └── PostgreSQL
   │
   └── Coreactor
           │
           ├── Code Analysis
           ├── Validation
           └── Controlled Execution
```

## Technology Stack

### Frontend

* Next.js
* React
* JavaScript
* CSS

### Backend

* Node.js
* REST APIs
* PostgreSQL

### Infrastructure

* Docker
* Linux
* VPS deployment

## Project Structure

```text
softwins/
└── next_js/
    └── src/
        ├── app/
        ├── components/
        ├── features/
        ├── hooks/
        ├── lib/
        ├── stores/
        ├── config/
        └── utils/
```

## Development Status

Softwins is currently under active development.

Features, architecture, and internal APIs may change as the project evolves.

## WebCreatix

Softwins is developed as part of the WebCreatix ecosystem.

WebCreatix is the umbrella for the products, infrastructure, and engineering projects surrounding Softwins and related systems.

## License

This project is currently not distributed under an open-source license.
>>>>>>> origin/main
