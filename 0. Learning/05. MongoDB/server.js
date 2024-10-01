const express = require('express');
const app = express();
const db = require('./db');
const MenuItem = require('./menuItem'); // Assuming this is a Mongoose model
const Person = require('./models/Person');

// Use express.json() instead of body-parser if not needed for anything else
app.use(express.json());

app.get('/', function (req, res) {
    res.send("Welcome to my hotel... How can I help you? We have a list of menus.");
});

// Post a new person (with async/await)
app.post('/person', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all menu items
app.get("/menu", async (req, res) => {
    try {
        const data = await MenuItem.find(); // Assuming MenuItem is a Mongoose model
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get persons by workType
app.get('/person/:workType', async (req, res) => {
    const workType = req.params.workType;

    try {
        const people = await Person.find({ workType });
        res.status(200).json(people);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
