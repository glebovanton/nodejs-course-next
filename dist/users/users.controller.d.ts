import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../entities/User").IUser>;
    findAll(): Promise<import("../entities/User").IUser[]>;
    findOne(id: string): Promise<import("../entities/User").IUser>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../entities/User").IUser>;
    remove(res: any, id: string): Promise<any>;
}
