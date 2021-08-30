import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request, ConsoleLogger } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('todo')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @Request() req) {
    return this.todoService.create(createTodoDto, req.user?.userId);
  }

  @Get()
  findAll(@Request() req) {
    return this.todoService.findAll(req.query.offset, req.query.limit, req.query.isLate);
  }

  @Get('user/:id')
  findByUser(@Param('id') id: number) {
    return this.todoService.findByUser(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }
}
