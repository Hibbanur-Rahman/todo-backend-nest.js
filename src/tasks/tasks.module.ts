import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./services/tasks.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksEntity } from "./entities/tasks.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([TasksEntity])
    ],
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule {}