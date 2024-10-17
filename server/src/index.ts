// index.ts
import { config } from "./config/config";
import app from "./server";

app.listen(config.SERVER_PORT, config.SERVER_HOST, () => {
  console.log(
    `Server is running on port: ++${config.SERVER_PORT}, host: ${config.SERVER_HOST}++`
  );
  console.log(`Environment mode: ++${process.env.NODE_ENV}++`);
});
