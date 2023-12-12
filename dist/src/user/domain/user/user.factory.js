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
exports.UserFactory = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const user_1 = require("./user");
let UserFactory = class UserFactory {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    create(id, account, nickname, email) {
        const user = new user_1.User(id, account, nickname, email);
        return user;
    }
    reconstitute(id, account, nickname, email) {
        return new user_1.User(id, account, nickname, email);
    }
};
exports.UserFactory = UserFactory;
exports.UserFactory = UserFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.EventBus])
], UserFactory);
//# sourceMappingURL=user.factory.js.map