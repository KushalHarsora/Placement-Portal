import express from 'express';

const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`server listening at port -> ${port}`);
});

app.get("/", (req, res) => {
    console.log(req.query.email);
    res.json({
        message: "Hello Frontend",
        email: req.query.email
    });
})