import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { IUser } from '../../types/types';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  async getAll(): Promise<IUser[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  @HttpCode(200)
  async getUser(@Param('id') id: string): Promise<IUser> {
    return this.usersService.getUser(id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: string,
  ): Promise<IUser> {
    return this.usersService.updateUser(updateUserDto, id);
  }

  @Delete(':id')
  @HttpCode(204)
  async removeUser(@Param('id') id: string): Promise<string> {
    return this.usersService.removeUser(id);
  }
}
