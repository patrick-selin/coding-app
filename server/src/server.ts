// server.js

import express, { Application } from "express";
import testRoutes from "./routes/testRoutes";


const app: Application = express();

//
// middleware
app.use(express.json());

//
//routes
app.get("/ping", (_req, res) => {
  console.log("teesting ping...");
  res.send("poong");
});

app.use("/api1", testRoutes);

export default app;
