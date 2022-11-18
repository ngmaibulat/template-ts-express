import knexpkg from "knex";
import config from "./knexfile.js";

const knex = knexpkg.knex;

let mode = "development";

if (process.env.NODE_ENV == "production") {
    mode = "production";
}

const dbconfig = config[mode];
const db = knex(dbconfig);

export default db;
