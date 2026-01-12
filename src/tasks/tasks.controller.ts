import { Body, Controller, Post } from "@nestjs/common";
import { TasksService } from "./services/tasks.service";
import { TaskDto } from "./dto/tasks.dto";

@Controller('tasks')
export class TasksController {
    constructor(private readonly service:TasksService){}

    @Post('create')
    createTask(@Body() payload:TaskDto){
        return this.service.createTask(payload);
    }
}