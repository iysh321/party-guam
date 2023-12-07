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
exports.PartyFactory = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const party_1 = require("./party");
let PartyFactory = class PartyFactory {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    create(id, title, content) {
        const party = new party_1.Party(id, title, content);
        return party;
    }
    reconstitute(id, title, content) {
        return new party_1.Party(id, title, content);
    }
};
exports.PartyFactory = PartyFactory;
exports.PartyFactory = PartyFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.EventBus])
], PartyFactory);
//# sourceMappingURL=party.factory.js.map