import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Body need to have login' })
  login: string;

  @IsString({ message: 'Body need to have password' })
  password: string;
}
