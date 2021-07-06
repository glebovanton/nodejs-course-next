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
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const task_interface_1 = require("../interface/task.interface");
const User_1 = require("./User");
const Board_1 = require("./Board");
let Task = class Task {
    static toResponse(task) {
        const { id, title, order, description, userId, boardId, columnId } = task;
        return { id, title, order, description, userId, boardId, columnId };
    }
};
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "boardId", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "columnId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, { onDelete: 'SET NULL' }),
    __metadata("design:type", User_1.User)
], Task.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Board_1.Board, { onDelete: 'CASCADE' }),
    __metadata("design:type", Board_1.Board)
], Task.prototype, "board", void 0);
Task = __decorate([
    typeorm_1.Entity()
], Task);
exports.Task = Task;
//# sourceMappingURL=Task.js.map