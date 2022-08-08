const mongoose = require("mongoose");
require('./config')

try {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.error(err);
  }

