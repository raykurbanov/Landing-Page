const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "..", "build")));

// app.get("*", (req, res) => {
//   res.sendFile("index.html", {
//     root: path.join(__dirname, "..", "build"),
//   });
//   // res.sendFile(path.join(__dirname, "../build", "index.html"));
// });
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.post("/", (req, res) => {
  res.status(200).send("GET route is working");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
