const router = require("express").Router();
const { nanoid } = require("nanoid");
const ShortenLink = require("../models/ShortenLinks");

const createRouter = () => {

    router.get("/:shortenLink", async (req, res) => {
        const result = await ShortenLink.find({shortenLink: req.params.shortenLink});
        if (result) {
            res.status(301).redirect(result[0].url);
        } else {
            res.sendStatus(404);
        }
    });
    router.post("/", async (req, res) => {
        req.body.shortenLink = nanoid(5);
        const link = new ShortenLink(req.body);
        try {
            await link.save();
            res.send(link);
        } catch (e) {
            res.status(400).send(e);
        }
    });
    return router;
};

module.exports = createRouter;