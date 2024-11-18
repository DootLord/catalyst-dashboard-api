import express, { Express, Request, Response } from "express";
import counter from "./routes/temp/counter.routes";
const app: Express = express();
const port = 3001;

app.use(express.json());

app.use("/", counter);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});