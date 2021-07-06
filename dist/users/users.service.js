"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const User_1 = require("../entities/User");
const typeorm_1 = require("typeorm");
let UsersService = class UsersService {
    async create(createUserDto) {
        const userRepository = typeorm_1.getRepository(User_1.User);
        const newUser = userRepository.create(createUserDto);
        return await userRepository.save(newUser);
    }
    async findAll() {
        const userRepository = typeorm_1.getRepository(User_1.User);
        return await userRepository.find();
    }
    async findOne(id) {
        const userRepository = typeorm_1.getRepository(User_1.User);
        const res = await userRepository.findOne(id);
        if (res === undefined)
            return null;
        return res;
    }
    async update(id, updateUserDto) {
        const userRepository = typeorm_1.getRepository(User_1.User);
        if (id) {
            const updatedUser = await userRepository.save(Object.assign({ id }, updateUserDto));
            if (updatedUser)
                return updatedUser;
        }
        return null;
    }
    async remove(id) {
        const userRepository = typeorm_1.getRepository(User_1.User);
        const deletedRes = await userRepository.delete(id);
        return deletedRes.affected === 1;
    }
};
UsersService = __decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map