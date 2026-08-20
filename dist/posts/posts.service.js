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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const tags_service_1 = require("../tags/tags.service");
const posts_repository_interface_1 = require("./posts.repository.interface");
let PostsService = class PostsService {
    constructor(postsRepository, usersService, tagsService) {
        this.postsRepository = postsRepository;
        this.usersService = usersService;
        this.tagsService = tagsService;
    }
    async create(dto) {
        const author = await this.usersService.findOne(dto.authorId);
        const tags = await this.tagsService.findByIds(dto.tagIds ?? []);
        return this.postsRepository.create({
            title: dto.title,
            content: dto.content,
            author,
            tags,
        });
    }
    findAll() {
        return this.postsRepository.findAll();
    }
    async findOne(id) {
        const post = await this.postsRepository.findById(id);
        if (!post)
            throw new common_1.NotFoundException(`Post ${id} not found`);
        return post;
    }
    findByTagName(tagName) {
        return this.postsRepository.findByTagName(tagName);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(posts_repository_interface_1.POSTS_REPOSITORY)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        tags_service_1.TagsService])
], PostsService);
//# sourceMappingURL=posts.service.js.map