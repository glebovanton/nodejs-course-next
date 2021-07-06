"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
    path: path.join(__dirname, '../../.env'),
});
const { PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE, POSTGRES_CONTAINER_PORT, ADMIN_NAME = 'admin', ADMIN_LOGIN = 'admin', ADMIN_PASSWORD = 'admin', } = process.env;
exports.config = {
    PORT,
    NODE_ENV,
    MONGO_CONNECTION_STRING,
    JWT_SECRET_KEY,
    POSTGRES_CONTAINER_PORT,
    AUTH_MODE: AUTH_MODE === 'true',
    ADMIN_NAME,
    ADMIN_LOGIN,
    ADMIN_PASSWORD,
};
//# sourceMappingURL=config.js.map