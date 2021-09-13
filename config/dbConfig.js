import mongoose from 'mongoose';
var dotenv = require('dotenv').config();
const url = process.env.LOCAL_DB;

var conn = mongoose.connect(url, { useNewUrlParser: true,
	useUnifiedTopology: true })
	.then(() => console.log("Database successfully connected"))
	.catch(err => console.log('error in database connection' + err))

export default conn;