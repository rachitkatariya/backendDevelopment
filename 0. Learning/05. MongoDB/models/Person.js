const mongoose = require('mongoose');

// Define the Person Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number // Corrected to 'Number'
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'], // Ensure the enum values are lowercase or consistent
        required: true
    },
    mobile: {
        type: String,
        required: true // Corrected the typo
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});

// Create Person Model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
