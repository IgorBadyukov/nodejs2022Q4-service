import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UsersController {
  @Get()
  getAll(): string {
    return 'This action returns all users';
  }

  @Get(':id')
  getUser(@Param('id') id: string): string {
    return 'This action returns one user by id';
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return;
  }

  @Put(':id')
  updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    return;
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return;
  }
}
