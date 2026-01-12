import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
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

  async findById(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  // Helper method to hash passwords (for creating test users)
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }
}
