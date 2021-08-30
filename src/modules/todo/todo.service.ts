import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserService } from '../user/user.service';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  constructor(
    private userService: UserService,
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) { }

  create(createTodoDto: CreateTodoDto, userId) {
    return this.todoRepository.save({ ...createTodoDto, user_id: userId });
  }

  async findAll(offset = 0, limit = 10, isLate) {
    const result = await this.todoRepository
      .createQueryBuilder('todo')
      .select(['description', 'due_date', 'user.email', `if(due_date < NOW() - INTERVAL 3 HOUR, true, false) AS isLate`])
      .innerJoin('user', 'user')
      .where('IF(true = :isLate, due_date < NOW() - INTERVAL 3 HOUR = :isLate, 1 = 1)', { isLate })
      .offset(offset)
      .limit(limit)
      .getRawMany();

    const [{ total }] = await this.todoRepository
      .createQueryBuilder('todo')
      .select(['COUNT(id) AS total'])
      .where('IF(true = :isLate, due_date < NOW() - INTERVAL 3 HOUR = :isLate, 1 = 1)', { isLate })
      .getRawMany();

    return { data: result, total }
  }

  async findByUser(id: number) {
    return await this.todoRepository
      .createQueryBuilder('todo')
      .select(['*', `if(due_date < NOW() - INTERVAL 3 HOUR, true, false) AS isLate`])
      .where({ user_id: id })
      .getRawMany();
  }

  async findOne(id: number) {
    return await this.todoRepository.findOne(id);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.findOne(id)
    if (!todo) throw new NotFoundException({ error: 'Todo nao encontrado!' })
    if (todo.status === 'finished') throw new BadRequestException({ error: 'Um todo concluido nao pode ser editado!' })
    return this.todoRepository.save({ id, ...updateTodoDto });
  }
}
