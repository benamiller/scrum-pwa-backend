const express = require("express");
const router = express.Router();
const supabaseProvider = require("./provider");
const scrumsProvider = supabaseProvider.from("scrums");

router.get("/", async (_req, res) => {
    const { data } = await scrumsProvider.select("*");

    res.json(data);
});

router.post("/", async (req, res) => {
    const { user, session, error } = await scrumsProvider.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
    })
    
    if (error) {
        res.sendStatus(404);
        return;
    }

    res.sendStatus(200);
    return;
});

module.exports = router;
