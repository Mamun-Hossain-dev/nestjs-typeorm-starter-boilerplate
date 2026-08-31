import {
  Injectable,
  ConflictException,
  NotFoundException,
  Inject,
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'
import {
  IUsersRepository,
  USERS_REPOSITORY,
} from './users.repository.interface'

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    // Business rule: duplicate email check; this is business logic, not a DB operation.
    const existing = await this.usersRepository.findByEmail(dto.email)
    if (existing) {
      throw new ConflictException('Email already registered')
    }
    return this.usersRepository.create(dto)
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll()
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findById(id)
    if (!user) throw new NotFoundException(`User ${id} not found`)
    return user
  }
}
