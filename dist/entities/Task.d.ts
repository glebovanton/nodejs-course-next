import { ITask } from "src/interface/task.interface";
import { User } from "./User";
import { Board } from "./Board";
export declare class Task {
    boardId?: string | null;
    columnId?: string | null;
    description: string;
    id?: string;
    order: number;
    title: string;
    userId?: string | null;
    user: User | null;
    board: Board | null;
    static toResponse(task: ITask): ITask;
}
