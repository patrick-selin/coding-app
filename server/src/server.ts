// server.js

import express, { Application } from "express";
import morganMiddleware from "./middleware/morgan";
import testRoutes from "./routes/testRoutes";

const app: Application = express();

//
// middleware
app.use(express.json());
app.use(morganMiddleware);

//
//routes
app.get("/ping", (_req, res) => {
  console.log("teesting ping...");
  res.send("poong");
});

app.use("/api1", testRoutes);



export default app;
