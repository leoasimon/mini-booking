const express = require("express");

const bookingService = require("./bookingService");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.params);
  return res.json({ message: "booking" });
});

router.get("/:month", async (req, res) => {
  console.log(req.params, req.query);
  return res.json({ message: "bookings this month" });
});

router.post("/", async (req, res) => {
  const { status, error, data } = await bookingService.book(req.body);

  if (status === 200) {
    return res.status(status).json(data);
  }

  return res.status(status).json({ error });
});

module.exports = {
  bookingRouter: router,
};
