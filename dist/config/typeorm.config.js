"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const user_entity_1 = require("../users/entities/user.entity");
const post_entity_1 = require("../posts/entities/post.entity");
const comment_entity_1 = require("../comments/entities/comment.entity");
const tag_entity_1 = require("../tags/entities/tag.entity");
const typeOrmConfig = (config) => ({
    type: 'postgres',
    host: config.get('DB_HOST'),
    port: config.get('DB_PORT'),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    database: config.get('DB_NAME'),
    entities: [user_entity_1.User, post_entity_1.Post, comment_entity_1.Comment, tag_entity_1.Tag],
    synchronize: false,
    logging: config.get('NODE_ENV') !== 'production',
});
exports.typeOrmConfig = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map