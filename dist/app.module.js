"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("./app.service");
const posts_module_1 = require("./module/posts/posts.module");
const posts_service_1 = require("./service/posts/posts.service");
const database_module_1 = require("./database/database.module");
const posts_entity_1 = require("./model/entity/posts.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [posts_module_1.PostsModule, database_module_1.DatabaseModule, typeorm_1.TypeOrmModule.forFeature([posts_entity_1.Posts])],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, posts_service_1.PostsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map