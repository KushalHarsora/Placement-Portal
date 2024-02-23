import express, { json } from 'express';

const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`server listening at port -> ${port}`);
});

app.get("/", (req, res, Next) => {
    res.send("Hello from Server");
})