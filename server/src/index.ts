// index.ts
import dotenv from "dotenv";
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});
// tee typescript def for env files
import app from "./server";
console.log(`NODE_ENV=${process.env.NODE_ENV}`);

const PORT = parseInt(process.env.PORT || "3334", 10);

console.log(`Port is : ${process.env.PORT}`);
console.log(`Path is : ${process.env.PATH}`);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log(`Environment mode: ++${process.env.NODE_ENV}++`);
});
