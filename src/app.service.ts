import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private dataSource: DataSource) {}

  async onApplicationBootstrap() {
    if (this.dataSource.isInitialized) {
      console.log('✓ Database connected successfully');
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
