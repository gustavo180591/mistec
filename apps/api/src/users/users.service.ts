import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: Partial<User>): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserInput.password, 10)
    const user = this.usersRepository.create({
      ...createUserInput,
      password: hashedPassword,
    })
    return this.usersRepository.save(user)
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOneOrFail({ where: { id } })
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } })
  }

  async update(id: string, updateUserInput: Partial<User>): Promise<User> {
    const user = await this.findOne(id)
    if (updateUserInput.password) {
      updateUserInput.password = await bcrypt.hash(updateUserInput.password, 10)
    }
    Object.assign(user, updateUserInput)
    return this.usersRepository.save(user)
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id)
    await this.usersRepository.remove(user)
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findByEmail(email)
    if (user && (await bcrypt.compare(password, user.password))) {
      return user
    }
    return null
  }
} 