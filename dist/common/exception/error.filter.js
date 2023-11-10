"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let CustomErrorExceptionFilter = class CustomErrorExceptionFilter {
    constructor() { }
    catch(error, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (error instanceof common_1.HttpException) {
            const httpException = error;
            const status = httpException.getStatus();
            const result = httpException.getResponse();
            response.status(status).json({
                ...result,
                path: request.url,
            });
        }
        else {
            const status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            const message = error.message || 'Internal Server Error';
            response.status(status).json({
                message,
                statusCode: status,
                path: request.url,
            });
        }
    }
};
exports.CustomErrorExceptionFilter = CustomErrorExceptionFilter;
exports.CustomErrorExceptionFilter = CustomErrorExceptionFilter = __decorate([
    (0, common_1.Catch)(Error),
    __metadata("design:paramtypes", [])
], CustomErrorExceptionFilter);
//# sourceMappingURL=error.filter.js.map