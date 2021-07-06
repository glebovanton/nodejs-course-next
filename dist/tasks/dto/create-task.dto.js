"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = void 0;
const task_interface_1 = require("../../interface/task.interface");
class CreateTaskDto {
    static toResponse(task) {
        const { id, title, order, description, userId, boardId, columnId } = task;
        return { id, title, order, description, userId, boardId, columnId };
    }
}
exports.CreateTaskDto = CreateTaskDto;
//# sourceMappingURL=create-task.dto.js.map