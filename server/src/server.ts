// server.js

import express, { Application } from "express";

const app: Application = express();

//
// middleware
app.use(express.json());

//
//routes
app.get("/ping", (_req, res) => {
  const func = (x: number) => {
    console.log(x);
  };
  const x: number = 33;
  func(x);
  console.log("teesting piung...");
  res.send("poong");
});

export default app;
