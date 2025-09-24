const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 3001;

app.get('/', (req, res) => {
    res.status(200).send({ success: true, message: "Hurray !!! Welcome to Local-Server" })
})

app.listen(PORT, () => console.log(`Local Server started at PORT ${PORT}`));