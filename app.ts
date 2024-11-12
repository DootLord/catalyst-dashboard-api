const express = require("express");
const app = express();
const port = 3001;

let counter = 0;
app.use(express.json());

app.get("/count", (req, res) => {
    res.send({
        value: counter
    });
}); 

app.post("/count", (req, res) => {
    if (!req.body) {
        return res.status(400).send("Request body is missing");
    }
    const { value } = req.body;
    console.log(value);
    counter += value;

    res.send("" + counter);
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});