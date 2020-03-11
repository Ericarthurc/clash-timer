const mongoose = require('mongoose');
const log = require('../utils/logs');

const dbPath = process.env.MONGO_URI;
mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', () => {
  log.error('Error occurred from the database');
});
db.once('open', () => {
  log.info('Successfully opened the database');
});
module.exports = mongoose;
