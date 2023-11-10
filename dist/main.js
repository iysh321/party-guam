"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const error_filter_1 = require("./common/exception/error.filter");
const fs = require("fs");
async function bootstrap() {
    const httpsOptions = process.env.MODE_ENV === 'local'
        ? null
        : {
            ca: fs.readFileSync(process.env.CA_REPO),
            key: fs.readFileSync(process.env.KEY_REPO),
            cert: fs.readFileSync(process.env.CERT_REPO),
        };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions,
    });
    app.enableCors({
        methods: 'GET,PUT,PATCH,POST,DELETE',
        origin: '*',
        credentials: true,
    });
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('party-guam API')
        .setDescription('The party-guam API description')
        .setVersion('1.0')
        .addTag('party-guam')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
    }));
    app.useGlobalFilters(new error_filter_1.CustomErrorExceptionFilter());
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT);
    console.log(`listening on port ${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map