const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log('Attempting to connect...');
console.log('URI:', process.env.MONGODB_URI.substring(0, 50) + '...');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connection successful!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  });
  