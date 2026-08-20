import { User } from './entities/user.entity'

export const USERS_REPOSITORY = Symbol('USERS_REPOSITORY')

export interface IUsersRepository {
  create(data: Partial<User>): Promise<User>
  findAll(): Promise<User[]>
  findById(id: number): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
}
