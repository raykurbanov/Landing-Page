const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.status(200).send("GET route is working");
});

app.post("/", (req, res) => {
  res.status(200).send("GET route is working");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
