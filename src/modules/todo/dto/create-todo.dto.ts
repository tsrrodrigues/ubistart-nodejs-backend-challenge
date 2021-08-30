import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @IsNotEmpty()
  due_date: string;
}
