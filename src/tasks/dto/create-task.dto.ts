import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../entities/User";
import {Board} from "../../entities/Board";
import {ITask} from "src/interface/task.interface";

export class CreateTaskDto {
    boardId?: string | null;
    columnId?: string | null;
    description: string;
    id?: string;
    order: number;
    title: string;
    userId?: string | null;
    user: User | null;
    board: Board | null;

    static toResponse(task: ITask): ITask {
        const { id, title, order, description, userId, boardId, columnId } = task;
        return { id, title, order, description, userId, boardId, columnId };
    }
}
