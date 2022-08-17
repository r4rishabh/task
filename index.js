require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");

connection();

//middlewares

app.use(express.json());
app.use(cors());

//routes

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);


const port = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`Listening on port ${port}`));