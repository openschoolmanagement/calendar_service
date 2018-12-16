import app from "./app";
import * as https from "https";

const PORT = 3000;

const httpsOptions = {};

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
