interface IConfig {
    PORT?: string;
    POSTGRES_CONTAINER_PORT?: string;
    NODE_ENV?: string;
    MONGO_CONNECTION_STRING?: string;
    JWT_SECRET_KEY?: string;
    AUTH_MODE?: boolean;
    ADMIN_NAME: string;
    ADMIN_LOGIN: string;
    ADMIN_PASSWORD: string;
}
export declare const config: IConfig;
export {};
