const express = require("express");
const app = express();
require('./config')
require('./db')


app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// Routes
app.use(require("./route/product.route"));
app.use(require("./route/variant.route"));

// app.use("/api/cars", require("./Cars/route"));
// app.use("/api/booking", require("./Booking/route"));



const server = app.listen(port, () =>
  console.log(`Server Connected to port ${port}`)
);

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
