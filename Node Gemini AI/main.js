const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, world! Gemini");
});

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generate = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        console.log(result);  // Inspect the structure of the result

        // Ensure that you access the correct property based on the actual API response
        return result.response ? result.response.text : "No content generated";
    } catch (err) {
        console.log(err);
        throw err;  // Rethrow the error to handle it in the calling function
    }
};

app.post('/api/content', async (req, res) => {
    try {
        const data = req.body.question;
        if (!data) {
            return res.status(400).send("Error: 'question' field is required in the request body.");
        }
        
        const result = await generate(data);
        res.send({
            "result": result
        });
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

app.listen(3000, () => {
    console.log('Server is up and running on port 3000');
});
