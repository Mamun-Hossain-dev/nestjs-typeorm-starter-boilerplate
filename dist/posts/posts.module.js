"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("./entities/post.entity");
const posts_service_1 = require("./posts.service");
const posts_repository_1 = require("./posts.repository");
const posts_controller_1 = require("./posts.controller");
const users_module_1 = require("../users/users.module");
const tags_module_1 = require("../tags/tags.module");
const posts_repository_interface_1 = require("./posts.repository.interface");
let PostsModule = class PostsModule {
};
exports.PostsModule = PostsModule;
exports.PostsModule = PostsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([post_entity_1.Post]), users_module_1.UsersModule, tags_module_1.TagsModule],
        controllers: [posts_controller_1.PostsController],
        providers: [
            posts_service_1.PostsService,
            {
                provide: posts_repository_interface_1.POSTS_REPOSITORY,
                useClass: posts_repository_1.PostsRepository,
            },
        ],
        exports: [posts_service_1.PostsService],
    })
], PostsModule);
//# sourceMappingURL=posts.module.js.map