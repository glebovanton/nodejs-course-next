"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const Task_1 = require("../entities/Task");
let TasksService = class TasksService {
    async create(createTaskDto) {
        const taskRepository = typeorm_1.getRepository(Task_1.Task);
        const newTask = taskRepository.create(createTaskDto);
        return await taskRepository.save(newTask);
    }
    async findAll() {
        const taskRepository = typeorm_1.getRepository(Task_1.Task);
        return await taskRepository.find();
    }
    async findOne(taskId) {
        const taskRepository = typeorm_1.getRepository(Task_1.Task);
        const res = await taskRepository.findOne(taskId);
        if (res === undefined)
            return null;
        return res;
    }
    async update(id, updateTaskDto) {
        const taskRepository = typeorm_1.getRepository(Task_1.Task);
        if (!id)
            return null;
        const updatedRes = await taskRepository.update(id, updateTaskDto);
        return updatedRes.raw;
    }
    async remove(taskId) {
        const taskRepository = typeorm_1.getRepository(Task_1.Task);
        const deletedRes = await taskRepository.delete(taskId);
        return !!deletedRes;
    }
};
TasksService = __decorate([
    common_1.Injectable()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map