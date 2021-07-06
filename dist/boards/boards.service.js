"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const Board_1 = require("../entities/Board");
let BoardsService = class BoardsService {
    async create(createBoardDto) {
        const boardRepository = typeorm_1.getRepository(Board_1.Board);
        const newBoard = boardRepository.create(createBoardDto);
        return await boardRepository.save(newBoard);
    }
    async findAll() {
        const boardRepository = typeorm_1.getRepository(Board_1.Board);
        return await boardRepository.find();
    }
    async findOne(id) {
        const boardRepository = typeorm_1.getRepository(Board_1.Board);
        const res = await boardRepository.findOne(id);
        if (res === undefined)
            return null;
        return res;
    }
    async update(id, updateBoardDto) {
        const boardRepository = typeorm_1.getRepository(Board_1.Board);
        const res = await boardRepository.findOne(id);
        if (res === undefined || !id)
            return null;
        const updatedRes = await boardRepository.update(id, updateBoardDto);
        return updatedRes.raw;
    }
    async remove(id) {
        const boardRepository = typeorm_1.getRepository(Board_1.Board);
        const deletedRes = await boardRepository.delete(id);
        return !!deletedRes.affected;
    }
};
BoardsService = __decorate([
    common_1.Injectable()
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map