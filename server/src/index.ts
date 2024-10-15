// index.ts
import { config } from './config/config';
import app from "./server";


app.listen(config.PORT, "0.0.0.0", () => {
  console.log(`Server is running on port: ++${config.PORT}++`);
  console.log(`Environment mode: ++${process.env.NODE_ENV}++`);
});
