import express, { Express } from "express";
import ip from "ip";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;
const base_url = process.env.BASE_URL || "127.0.0.1";

export default
  app.listen(port, () => console.log(`
    App running at :
      - Local :   ${`http://${base_url}:${port}`}
      - Network : ${`http://${ip.address()}:${port}`}
  `));
