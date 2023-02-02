import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Body need to have login' })
  login: string;

  @IsNotEmpty({ message: 'Body need to have password' })
  password: string;
}
