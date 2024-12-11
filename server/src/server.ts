// server.js

import express, { Application } from "express";
import cors from "cors";
import morganMiddleware from "./middleware/morgan";
import { unknownEndpoint } from "./middleware/unknownEndpoint";
import healthCheckRoutes from "./routes/healthRoutes";
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

app.use("/api1", healthCheckRoutes);
app.use("/api1", testRoutes);
app.use("/", healthCheckRoutes);

// middleware
app.use(unknownEndpoint);
// error handeler middleware

export default app;
