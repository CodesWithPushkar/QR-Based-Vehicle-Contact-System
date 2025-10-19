Yes My Wheelz - QR Parking Management
Yes My Wheelz is a full-stack MERN application (MongoDB, Express, Node.js) designed to manage vehicle parking and resolve parking conflicts. Users can register their vehicles to generate a unique QR code. When this QR code is scanned, it displays the vehicle owner's contact information, allowing anyone to easily report a parking issue (e.g., a blocked driveway).

This project uses a secure architecture where the QR code only stores a unique database ID, not the user's personal information, which is fetched securely from the backend.

Features
Vehicle Registration: Securely register a vehicle with owner name, vehicle number, and phone number.

Secure QR Code Generation: Generates a unique QR code that stores only a non-guessable database ID.

QR Code Scanning: Scan a vehicle's QR code (via image upload) to fetch and display the owner's contact details.

Full-Stack Architecture: Built with a Node.js/Express backend and a cloud-based MongoDB Atlas database.

Single-Page Interface: All functionality is served from a single, static index.html file, managed by the backend.

Tech Stack
Frontend: HTML, CSS, Plain JavaScript

Backend: Node.js, Express.js

Database: MongoDB Atlas (with Mongoose)

JavaScript Libraries:

qrcode.js: For client-side QR code generation.

qr-scanner: For client-side QR code scanning from an image.

Installation and Setup
To get this project running on your local machine, follow these steps.

1. Clone the Repository

Bash

git clone https://github.com/your-username/your-repository-name.git
(Replace your-username/your-repository-name with your actual GitHub repo URL)

2. Set Up the Backend

The backend server is responsible for running the API and serving the website.

Bash

# Navigate into the backend folder
cd yes-my-wheelz/backend

# Install all the necessary packages
npm install
3. Configure the Database

You need to connect your local server to a MongoDB Atlas (or local) database.

Open the file backend/db.js.

Find the following line:

JavaScript

const MONGO_URI = 'PASTE YOUR CONNECTION STRING HERE';
Replace the placeholder text with your actual MongoDB connection string.

4. Run the Server

Once the database is configured, you can start the server.

Bash

npm start
Your server will start (usually on port 5001), connect to MongoDB, and serve the website.

How to Use
Open your web browser and go to http://localhost:5001.

The "Yes My Wheelz" website will load.

To Register a Vehicle:

Fill in the "Owner Name", "Vehicle Number", and "Phone Number" in the registration form.

Click "Generate QR Code".

Your data will be saved to the database, and a unique QR code will appear.

Save this QR code as an image (e.g., take a screenshot).

To Scan a Vehicle:

Scroll down to the "Scan a Vehicle's QR Code" section.

Click the "Choose File" button and upload the QR code image you just saved.

The app will scan the ID, fetch the data from the database, and display the owner's information on the screen.
