// The base URL of our backend API
const API_URL = 'http://localhost:5001/api/vehicles';

// Handle QR Code generation
document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const ownerName = document.getElementById("ownerName").value;
    const vehicleNumber = document.getElementById("vehicleNumber").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    try {
        // 1. Send form data to the backend API
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ownerName,
                vehicleNumber,
                phoneNumber
            }),
        });

        if (!response.ok) {
            // If the server responds with an error (e.g., vehicle already exists)
            const errorData = await response.json();
            throw new Error(errorData.msg || 'Failed to register vehicle');
        }

        const newVehicle = await response.json();
        const vehicleId = newVehicle._id; // Get the unique ID from the backend response

        // 2. Generate a QR code containing ONLY the vehicle's unique ID
        const qrCodeContainer = document.getElementById("qrCodeContainer");
        const qrCodeDiv = document.getElementById("qrCode");
        
        qrCodeDiv.innerHTML = ""; // Clear previous QR code
        qrCodeContainer.classList.remove("hidden");

        new QRCode(qrCodeDiv, {
            text: vehicleId, // The QR code now only stores the ID
            width: 150,
            height: 150,
        });

    } catch (error) {
        console.error('Registration Error:', error);
        alert(`Error: ${error.message}`);
    }
});

// Handle QR Code scanning
const qrInput = document.getElementById('qrInput');
qrInput.addEventListener('change', async event => {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    try {
        // 1. Scan the image to get the text (which is the vehicle ID)
        const scanResult = await QrScanner.scanImage(file, { returnDetailedScanResult: true });
        const vehicleId = scanResult.data;

        // 2. Fetch the vehicle's full details from the backend using the ID
        const response = await fetch(`${API_URL}/${vehicleId}`);
        
        if (!response.ok) {
            throw new Error('Vehicle not found in the database.');
        }

        const vehicleInfo = await response.json();
        
        // 3. Display the fetched information
        const scanResultDiv = document.getElementById("scanResult");
        scanResultDiv.classList.remove("hidden");
        scanResultDiv.innerHTML = `
            <h3>Vehicle Information:</h3>
            <p><strong>Owner Name:</strong> ${vehicleInfo.ownerName}</p>
            <p><strong>Vehicle Number:</strong> ${vehicleInfo.vehicleNumber}</p>
            <p><strong>Phone Number:</strong> ${vehicleInfo.phoneNumber}</p>
        `;

    } catch (err) {
        const scanResultDiv = document.getElementById("scanResult");
        scanResultDiv.classList.remove("hidden");
        scanResultDiv.innerHTML = `<p><strong>Error:</strong> Could not retrieve vehicle data. Please check the QR code.</p>`;
        console.error(err);
    }
});