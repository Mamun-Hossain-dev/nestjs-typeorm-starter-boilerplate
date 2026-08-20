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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const tags_repository_interface_1 = require("./tags.repository.interface");
let TagsService = class TagsService {
    constructor(tagsRepository) {
        this.tagsRepository = tagsRepository;
    }
    async create(dto) {
        const existing = await this.tagsRepository.findByName(dto.name);
        if (existing) {
            throw new common_1.ConflictException(`Tag "${dto.name}" already exists`);
        }
        return this.tagsRepository.create(dto);
    }
    findAll() {
        return this.tagsRepository.findAll();
    }
    findByIds(ids) {
        return this.tagsRepository.findByIds(ids);
    }
};
exports.TagsService = TagsService;
exports.TagsService = TagsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(tags_repository_interface_1.TAGS_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], TagsService);
//# sourceMappingURL=tags.service.js.map