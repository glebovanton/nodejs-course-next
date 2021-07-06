import { User } from '../entities/User';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User | null>;
    remove(id: string): Promise<boolean>;
}
