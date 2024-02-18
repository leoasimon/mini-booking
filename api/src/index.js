const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const { initDb } = require("./persistence");
const { usersRouter } = require("./users/userRouter");
const { authRouter } = require("./auth/authRouter");
const { bookingRouter } = require("./booking/bookingRouter");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello mini Auth Api!!!!!");
});

app.use("/", authRouter);
app.use("/users", usersRouter);
app.use("/booking", bookingRouter);

const startApp = async () => {
  await initDb();

  app.listen(3000, () => {
    console.log("App listening on port 3000");
  });
};

startApp();
