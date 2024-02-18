const { pool } = require("../persistence");

const book = async (appointment) => {
  const isAvailable = await checkAvailability(appointment.date);

  if (!isAvailable) {
    return {
      status: 400,
      error: "Appointment not available",
    };
  }

  try {
    const { date, clientEmail, clientName, clientPhone, message } = appointment;
    await pool.query(
      "INSERT INTO appointment (date, client_email, client_name, client_phone, message) VALUES ($1, $2, $3, $4, $5)",
      [date, clientEmail, clientName, clientPhone, message]
    );

    return {
      status: 200,
      data: {
        message: "Appointment booked successfully!"
      },
    };
  } catch (e) {
    return {
      status: 500,
      error: e.message,
    };
  }
};

const checkAvailability = async (date) => {
  const response = await pool.query(
    "SELECT * FROM appointment WHERE date = $1",
    [date]
  );

  return response.rows.length === 0;
};

module.exports = {
  book,
};
