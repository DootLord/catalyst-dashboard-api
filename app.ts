import express, { Express, Request, Response } from "express";
import counterRoute from "./routes/counter.routes";
import cashRoute from "./routes/cash.routes";
const app: Express = express();
const port = 3001;

app.use(express.json());

app.use("/counter", counterRoute);
app.use("/cash", cashRoute)

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});