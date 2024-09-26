URL Shortener Application
This application allows users to shorten URLs and track the number of times each shortened URL has been accessed. It consists of a backend built with Node.js, Express, TypeScript, and MongoDB, and a frontend built with React (Vite). The application also uses Redis for caching and fast access.

Table of Contents
Technologies Used
Getting Started
Running the Application with Docker
Client Instructions
API Endpoints
Contributing
Technologies Used
Node.js
Express
TypeScript
MongoDB
Redis
React (Vite)
Getting Started
Prerequisites
Make sure you have the following installed on your machine:

Docker
Docker Compose
Running the Application with Docker
Clone the repository:

bash
Copy code
git clone https://github.com/MosheProjects/Url_Shortener.git
cd server

Server Instructions

Build and run the Docker containers:

bash
Copy code
docker-compose up --build
This command will build the images and start the server and database containers.

The server will be accessible at http://localhost:5000.

Client Instructions
Navigate to the client directory:

bash
Copy code
cd client/urlShortener
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
The client will be accessible at http://localhost:5173.

API Endpoints
Shorten URL
POST /api/shorten
Request Body:
json
Copy code
{
  "url": "http://example.com"
}
Response:
json
Copy code
{
  "shortenedUrl": "http://localhost:5000/api/qC0x5DK"
}
Redirect to Original URL
GET /api/:shortId
Redirects to the original URL associated with the provided shortId
