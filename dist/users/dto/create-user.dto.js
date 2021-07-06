"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
class CreateUserDto {
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map