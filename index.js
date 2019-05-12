const express = require("express");
const path = require("path");
const app = express();


const publicFiles = path.join(__dirname, "assets/");
app.use(express.static(publicFiles));

const PORT = process.env.PORT || 8000;

var server = app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});
