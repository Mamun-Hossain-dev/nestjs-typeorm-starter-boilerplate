import { User } from './entities/user.entity';
export declare const USERS_REPOSITORY: unique symbol;
export interface IUsersRepository {
    create(data: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}
