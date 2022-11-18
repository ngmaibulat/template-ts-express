import createApp from "./app.js";
import { getOnListen, getPort } from "./utils.js";

try {
    const port = getPort();
    const app = createApp();
    app.listen(port, getOnListen(port));
} catch (err: any) {
    console.log(err);
    process.exit(1);
}
