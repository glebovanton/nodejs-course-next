import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    create(createBoardDto: CreateBoardDto): Promise<import("../entities/Board").Board>;
    findAll(): Promise<import("../entities/Board").Board[]>;
    findOne(id: string): Promise<import("../entities/Board").Board>;
    update(id: string, updateBoardDto: UpdateBoardDto): Promise<import("../entities/Board").Board>;
    remove(id: string): Promise<boolean>;
}
