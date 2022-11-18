import type { Knex } from "knex";

// Update with your config settings.

interface IKnexConfig {
    [key: string]: Knex.Config;
}

interface connectionData {
    database: string;
    user: string;
    password: string;
}

async function getConnectionData(): Promise<connectionData> {
    const cfg: connectionData = {
        database: "tsexpress",
        user: "root",
        password: "qaz123ZX",
    };

    return cfg;
}

const config: IKnexConfig = {
    development: {
        client: "mysql2",
        connection: await getConnectionData(),
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            extension: "ts",
        },
    },

    production: {
        client: "postgresql",
        connection: await getConnectionData(),
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            extension: "ts",
        },
    },
};

export default config;
