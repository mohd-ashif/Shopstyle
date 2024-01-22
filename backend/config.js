const mongoose = require("mongoose")
require('dotenv').config();


async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      
    });

    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  }
}

connectToDb();
