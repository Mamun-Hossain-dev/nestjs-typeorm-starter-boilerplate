"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const comments_service_1 = require("./comments.service");
const comments_repository_1 = require("./comments.repository");
const comments_controller_1 = require("./comments.controller");
const users_module_1 = require("../users/users.module");
const posts_module_1 = require("../posts/posts.module");
const comments_repository_interface_1 = require("./comments.repository.interface");
let CommentsModule = class CommentsModule {
};
exports.CommentsModule = CommentsModule;
exports.CommentsModule = CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comment_entity_1.Comment]), users_module_1.UsersModule, posts_module_1.PostsModule],
        controllers: [comments_controller_1.CommentsController],
        providers: [
            comments_service_1.CommentsService,
            {
                provide: comments_repository_interface_1.COMMENTS_REPOSITORY,
                useClass: comments_repository_1.CommentsRepository,
            },
        ],
    })
], CommentsModule);
//# sourceMappingURL=comments.module.js.map