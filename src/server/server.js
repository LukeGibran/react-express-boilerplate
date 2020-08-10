const express = require("express");

const app = express();

const port = process.env.PORT || 5001;

app.use(express.static("dist"));
app.get("/api/welcome", (req, res) => {
  res.status(200).send({ msg: "Server Connected!" });
});

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
