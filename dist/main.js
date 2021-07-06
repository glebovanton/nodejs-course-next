"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YAML = require("yamljs");
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./common/config");
const path = require("path");
const { PORT } = config_1.config;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
    swagger_1.SwaggerModule.setup('/doc', app, swaggerDocument);
    await app.listen(PORT, () => process.stdout.write(`App is running on http://localhost:${PORT} \n`));
}
bootstrap();
//# sourceMappingURL=main.js.map