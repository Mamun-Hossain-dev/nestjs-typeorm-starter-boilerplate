import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { IUsersRepository } from './users.repository.interface';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: IUsersRepository);
    create(dto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
}
