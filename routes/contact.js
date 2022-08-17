const router = require("express").Router();
const { Contact } = require("../models/contact");



router.post("/", async (req, res) => {
    try {
        await new Contact({ ...req.body }).save();
        res.status(201).send({ message: "Contact saved successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;