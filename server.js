const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/reservations", reservationRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});