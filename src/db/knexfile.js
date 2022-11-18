"use strict";
const config = {
  development: {
    client: "mysql2",
    connection: {
      database: "tsexpress",
      user: "root",
      password: "qaz123ZX"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
export default config;
