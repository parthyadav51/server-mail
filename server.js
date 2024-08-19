const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const emailRoutes = require("./routes/emailRoute");

const app = express();
const port = process.env.PORT || 8001;
const corsOptions = { origin: "*" };

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", emailRoutes);
app.use("/", (req, res) => {
  console.log({
    data: req.body,
    params: req.params,
    query: req.query,
  });

  res.send({
    data: req.body,
    params: req.params,
    query: req.query,
    message: "Api is working",
  });
});

app.listen(port, "0.0.0.0", () =>
  console.log(`Server is running on http://localhost:${port}`)
);
