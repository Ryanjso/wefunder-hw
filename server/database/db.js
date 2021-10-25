const mongoose = require('mongoose');

/**
 * Connects to MongoDB database
 *
 * @param {string} connectionString
 */
module.exports = function (connectionString) {
  mongoose
    .connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch((err) => {
      console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
    });
};
