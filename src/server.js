const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3001; // Choose any available port

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Proxy POST requests to Google Apps Script endpoint
app.post("/submit-form", async (req, res) => {
  try {
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbzXcnfn6G89TlVas8l1oIxyJBt1315gHe4M71xBx7uV-eVRTUzV-mGzg4xveG1ib7fb/exec",
      req.body
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error submitting form: ", error);
    res.status(500).json({ error: "Failed to submit form data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
