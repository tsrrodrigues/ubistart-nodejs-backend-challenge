import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

enum Status {
  pending = 'pending',
  finished = 'finished'
}

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsEnum(Status)
  status: string;
}