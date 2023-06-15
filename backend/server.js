import express from 'express';
import { mongoose } from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// Allow requests from localhost:3000
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for your data
const userDataSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const UserData = mongoose.model('UserData', userDataSchema);

// Define the API endpoint
app.post('/api/userdata', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  // Create a new document using the UserData model
  const newUser = new UserData({ username, password });

  // Save the document to the database
  newUser.save();
  return res.status(200).send({
    message:`saved successfully for username ${username} and password ${password}`
  })
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
