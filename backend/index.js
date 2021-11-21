const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api", (req, res) => res.json({ success: true, path: "Check API" }));

const port = process.env.PORT;

app.listen(port, () => console.log(`[SERVER] SERVER START ON PORT = ${port}`));
