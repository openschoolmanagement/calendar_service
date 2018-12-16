"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const app_1 = require("./app");
const PORT = 3000;
const httpsOptions = {};
https.createServer(httpsOptions, app_1.default).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=index.js.map