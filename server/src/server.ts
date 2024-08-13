// server.js

import express, { Application } from "express";

const app: Application = express();

//
// middleware
app.use(express.json());

//
//routes
app.get("/ping", (_req, res) => {
  console.log("testing pinging...");
  res.send("pong");
});

export default app;
