const mongoose = require('mongoose');

const dbURI = 'your_mongoDB_connection_string_here';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Export the mongoose connection
module.exports = mongoose;
