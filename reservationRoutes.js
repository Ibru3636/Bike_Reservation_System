const express = require("express");
const router = express.Router();

let reservations = require("../data/reservations");


router.post("/search", (req, res) => {
  const { reservationId, riderId } = req.body;

  const reservation = reservations.find(
    r => r.reservationId === reservationId && r.riderId === riderId
  );

  if (!reservation) {
    return res.status(404).json({ message: "Reservation not found" });
  }

  res.json(reservation);
});


router.put("/update", (req, res) => {
  const { reservationId, riderId, dockLocation, duration } = req.body;

  const reservation = reservations.find(
    r => r.reservationId === reservationId && r.riderId === riderId
  );

  if (!reservation) {
    return res.status(404).json({ message: "Reservation not found" });
  }

  if (reservation.status === "closed") {
    return res.status(400).json({ message: "Cannot edit closed reservation" });
  }

  if (dockLocation) reservation.dockLocation = dockLocation;
  if (duration) reservation.duration = duration;

  res.json({ message: "Updated successfully", reservation });
});

module.exports = router;