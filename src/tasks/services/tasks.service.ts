import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TasksEntity } from "../entities/tasks.entity";
import { TaskDto } from "../dto/tasks.dto";

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TasksEntity)
        private readonly tasksEntity:Repository<TasksEntity>
    ){}
    async getTasks(){
        return [{ id: 1, title: 'Sample Task' }];
    }

    async createTask(payload:TaskDto){
        const { title, description }=payload;
        const tasks=this.tasksEntity.create({
            title,
            description
        });
        return this.tasksEntity.save(tasks);
    }

}