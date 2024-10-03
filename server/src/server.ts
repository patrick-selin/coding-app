// server.js

import express, { Application } from "express";
import cors from "cors";
import morganMiddleware from "./middleware/morgan";
import { unknownEndpoint } from "./middleware/unknownEndpoint";
import testRoutes from "./routes/testRoutes";

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morganMiddleware);
//routes
app.get("/", (_req, res) => {
  res.send("Hello app");
});
app.get("/ping", (_req, res) => {
  console.log("teeeesting ping...");
  res.send("poong");
});

app.use("/api1", testRoutes);

// middleware
app.use(unknownEndpoint);
// error handeler middleware

export default app;
