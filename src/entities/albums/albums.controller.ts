import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IAlbumBody } from '../../types/types';

@Controller('albums')
export class AlbumsController {
  @Get()
  getAll(): string {
    return 'This action returns all albums';
  }

  @Get(':id')
  getUser(@Param('id') id: string): string {
    return 'This action returns one albums by id';
  }

  @Post()
  createUser(@Body() createUserDto: IAlbumBody) {
    return;
  }

  @Put(':id')
  updateUser(@Body() updateUserDto: IAlbumBody, @Param('id') id: string) {
    return;
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return;
  }
}
