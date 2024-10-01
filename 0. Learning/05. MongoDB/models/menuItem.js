const mongoose = require('mongoose');

// Define the Person Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    smoothie: {
        type: String
    },
    isDrink: {
        type: Boolean, // Assuming 'isDrink' is a boolean flag
        required: true
    },
    ingredients: {
        type: String,
        enum: ['banana', 'strawberry', 'mango'], // Replace with actual ingredients
        required: true
    },
    yogurt: {
        type: String,
        required: true // Corrected the typo
    },
    numSales: {
        type: Number,
        required: true
    }
});

// Create Person Model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
