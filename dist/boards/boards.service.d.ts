import { Board } from '../entities/Board';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
export declare class BoardsService {
    create(createBoardDto: CreateBoardDto): Promise<Board>;
    findAll(): Promise<Board[]>;
    findOne(id: string): Promise<Board | null>;
    update(id: string, updateBoardDto: UpdateBoardDto): Promise<Board | null>;
    remove(id: string): Promise<boolean>;
}
