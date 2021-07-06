import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<import("../entities/Task").Task>;
    findAll(): Promise<import("../entities/Task").Task[]>;
    findOne(id: string): Promise<import("../entities/Task").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<any>;
    remove(id: string): Promise<boolean>;
}
