"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = require("path");
dotenv_1.config({
    path: path_1.join(__dirname, '../.env'),
});
const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_CONTAINER_PORT, } = process.env;
const ORMConfig = {
    type: 'postgres',
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    port: POSTGRES_CONTAINER_PORT
        ? Number.parseInt(POSTGRES_CONTAINER_PORT, 10)
        : 5432,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    entities: [path_1.join(__dirname, '/entities/**/*{.ts,.js}')],
    migrations: [path_1.join(__dirname, '/migrations/**/*{.ts,.js}')],
    synchronize: false,
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations',
    },
    logging: false,
};
exports.default = ORMConfig;
//# sourceMappingURL=ormconfig.js.map