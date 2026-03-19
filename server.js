const express = require("express");

const app = express();

app.get("/app", (req, res) => {
    res.send("salom backendchilar");
});

app.get("/x", (req, res) => {
    res.send("serverga routing qo'shildi");
});

app.listen(3000, () => {
    console.log("server ishladi!!!");
});

// npm run dev
