import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { IUsersRepository } from './users.repository.interface'

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  create(data: Partial<User>): Promise<User> {
    const user = this.repo.create(data)
    return this.repo.save(user)
  }

  findAll(): Promise<User[]> {
    return this.repo.find()
  }

  findById(id: number): Promise<User | null> {
    return this.repo.findOne({
      where: { id },
      relations: { posts: true, comments: true },
    })
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repo.findOneBy({ email })
  }
}
