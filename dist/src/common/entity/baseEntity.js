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
exports.BaseEntity = exports.StatusType = void 0;
const typeorm_1 = require("typeorm");
var StatusType;
(function (StatusType) {
    StatusType["ACTIVE"] = "active";
    StatusType["INACTIVE"] = "inactive";
    StatusType["SURVEY_READY"] = "survey_ready";
    StatusType["SURVEY_ONGOING"] = "survey_ongoing";
    StatusType["DELETED"] = "deleted";
    StatusType["PENDING"] = "pending";
    StatusType["PROCESSING"] = "processing";
    StatusType["COMPLETED"] = "completed";
    StatusType["APPROVED"] = "approved";
    StatusType["REJECTED"] = "rejected";
    StatusType["SUSPENDED"] = "suspended";
    StatusType["CANCELED"] = "canceled";
    StatusType["EXPIRED"] = "expired";
    StatusType["ARCHIVED"] = "archived";
})(StatusType || (exports.StatusType = StatusType = {}));
let BaseEntity = class BaseEntity {
};
exports.BaseEntity = BaseEntity;
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: StatusType,
        default: StatusType.ACTIVE,
    }),
    __metadata("design:type", String)
], BaseEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
exports.BaseEntity = BaseEntity = __decorate([
    (0, typeorm_1.Entity)()
], BaseEntity);
//# sourceMappingURL=baseEntity.js.map