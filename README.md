
# **URL Shortener Application**

This application allows users to shorten URLs and track the number of times each shortened URL has been accessed. It consists of a backend built with Node.js, Express, TypeScript, and MongoDB, and a frontend built with React (Vite). The application also uses Redis for caching and fast access.

## **Table of Contents**
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running the Application with Docker](#running-the-application-with-docker)
- [Client Instructions](#client-instructions)
- [API Endpoints](#api-endpoints)
  - [Shorten URL](#shorten-url)
  - [Redirect to Original URL](#redirect-to-original-url)
- [Contributing](#contributing)

---

## **Technologies Used**
- **Backend:** Node.js, Express, TypeScript, MongoDB, Redis
- **Frontend:** React (Vite)
- **Other Tools:** Docker, Docker Compose

---

## **Getting Started**

### **Prerequisites**
Make sure you have the following installed on your machine:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### **Running the Application with Docker**

1. **Clone the repository:**
    \`\`\`bash
    git clone https://github.com/MosheProjects/Url_Shortener.git  \`\`\`
 2. **navigate to servers directory:**
     \`\`\cd server \`\`\
  

3. **Build and run the Docker containers:**
    \`\`\`bash
    docker-compose up --build
    \`\`\`
    This command will build the images and start the server and database containers.

    The server will be accessible at:  
    **[http://localhost:5000](http://localhost:5000)**

---

## **Client Instructions**

1. **Navigate to the client directory:**
    \`\`\`bash
    cd client/urlShortener
    \`\`\`

2. **Install dependencies:**
    \`\`\`bash
    npm install
    \`\`\`

3. **Start the development server:**
    \`\`\`bash
    npm run dev
    \`\`\`

    The client will be accessible at:  
    **[http://localhost:5173](http://localhost:5173)**

---

## **API Endpoints**

### **Shorten URL**
- **Endpoint:** \`POST /api/shorten\`
- **Request Body:**
    \`\`\`json
    {
      "url": "http://example.com"
    }
    \`\`\`
- **Response:**
    \`\`\`json
    {
      "shortenedUrl": "http://localhost:5000/api/qC0x5DK"
    }
    \`\`\`

### **Redirect to Original URL**
- **Endpoint:** \`GET /api/:shortId\`
- **Description:** Redirects to the original URL associated with the provided \`shortId\`.

---

## **Contributing**

Feel free to contribute by submitting issues or pull requests. To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your changes.
5. Open a pull request.

---

With these instructions, anyone can quickly set up and run the URL Shortener app. It provides clear and concise steps for both server and client-side setup, making it easier for developers to understand and contribute.
