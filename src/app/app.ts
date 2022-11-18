import express from "express";
import todoRouter from "../features/todo/route.js";
import { handleErrors } from "../middleware/handleError.js";

/**
 *  should we pass Knex Instanse as param?
 * @returns Express App
 */

export default function createApp(): express.Application {
    const app = express();

    app.use(express.json());
    app.use("/todo", todoRouter);
    app.use(handleErrors);

    return app;
}
