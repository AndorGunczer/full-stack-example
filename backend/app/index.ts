import { Express, Request, Response, query } from "express";
import express from "express";
import { io } from "socket.io-client";
// import { Server } from "socket.io";
import dotenv from "dotenv";
import { PhaseData, setPhase, getPhase } from "./controllers/getPhase";
import cors from "cors";

const app: express.Application = express();
// const io_client = io("localhost:9000");

// const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"]
}));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/phase", async (req: Request, res: Response) => {
    const queryParam: number = Number(req.query.phase as string);
    let test: PhaseData | null = null;
    if (!(await setPhase(queryParam)))
      res.send({status: 504});
    else
      test = await getPhase();
    console.log(test);
    if (test === null)
      res.send({status: 504, 
                value: test});
    else
      res.send({status: 200,
                value: test});
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});