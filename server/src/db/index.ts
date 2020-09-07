const mongoose = require("mongoose");

import userModel from "../models";
const d = require("../data");

const url = "mongodb://localhost:27017/user_test_db";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to MongoDB
mongoose.connect(url, options).catch((e) => console.error(e.message));

// Clear collection first, whilst on local server
userModel.deleteMany({}, (rej) => rej && console.error("remove dining"));

// Add initial data to collection
userModel.insertMany(d.data, (rej) => rej);

export const db = mongoose.connection;

export default db;
