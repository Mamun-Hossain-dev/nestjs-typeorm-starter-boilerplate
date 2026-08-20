import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IUsersRepository } from './users.repository.interface';
export declare class UsersRepository implements IUsersRepository {
    private readonly repo;
    constructor(repo: Repository<User>);
    create(data: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}
