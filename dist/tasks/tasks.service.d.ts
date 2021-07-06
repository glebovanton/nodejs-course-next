import { Task } from '../entities/Task';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(taskId: string): Promise<Task | null>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<any>;
    remove(taskId: string): Promise<boolean>;
}
