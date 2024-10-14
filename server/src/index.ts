// index.ts
import dotenv from "dotenv";
dotenv.config();


import app from "./server";
// import config from './config/env-config';

console.log(`NODE_ENV=${process.env.NODE_ENV}`);

const PORT = parseInt(process.env.PORT || "3334", 10);

console.log(process.env.port);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
