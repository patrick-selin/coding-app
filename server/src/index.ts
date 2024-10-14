// index.ts
import dotenv from "dotenv";
dotenv.config();

import app from "./server";

const PORT = process.env.PORT;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});