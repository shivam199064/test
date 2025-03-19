const express = require('express');
const app = express();

// Define a GET route for adding two numbers
app.get('/add', (req, res) => {
    // Get query parameters from the request
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    // Perform addition
    const sum = num1 + num2;

    // Send response
    res.json({ num1, num2, sum });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
