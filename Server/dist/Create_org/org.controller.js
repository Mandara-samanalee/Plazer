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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgController = void 0;
const common_1 = require("@nestjs/common");
const org_service_1 = require("./org.service");
const org_entity_1 = require("./org.entity");
let OrgController = class OrgController {
    constructor(orgService) {
        this.orgService = orgService;
    }
    register(orgDetails) {
        return this.orgService.register(orgDetails);
    }
};
exports.OrgController = OrgController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [org_entity_1.org]),
    __metadata("design:returntype", Promise)
], OrgController.prototype, "register", null);
exports.OrgController = OrgController = __decorate([
    (0, common_1.Controller)('org'),
    __metadata("design:paramtypes", [org_service_1.OrgService])
], OrgController);
//# sourceMappingURL=org.controller.js.map