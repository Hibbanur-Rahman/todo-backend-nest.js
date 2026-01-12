import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  // In a real application, this would be a database
  private readonly users: User[] = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@example.com',
      password: '$2b$10$41kivkdJzuJxwTeOqX5QT.eNpia709uVnhLqyZ/J1Q2ZsMBOV69OS', // password: 'admin123'
    },
  ];

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
  
  async findByEmail(email: string){
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async findById(id: number){
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }

  // Helper method to hash passwords (for creating test users)
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const newUser= this.userRepository.create({
      username: userData.username!,
      email: userData.email!,
      password: userData.password!,
    });
    await this.userRepository.save(newUser);
    console.log('New user created:', newUser);
    return newUser;
  }
}
