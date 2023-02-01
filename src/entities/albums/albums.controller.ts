import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('album')
export class AlbumsController {
  @Get()
  getAll(): string {
    return 'This action returns all albums';
  }

  @Get(':id')
  getAlbum(@Param('id') id: string): string {
    return 'This action returns one albums by id';
  }

  @Post()
  createAlbum(@Body() createAlbum: CreateAlbumDto) {
    return;
  }

  @Put(':id')
  updateAlbum(@Body() updateAlbum: UpdateAlbumDto, @Param('id') id: string) {
    return;
  }

  @Delete(':id')
  removeAlbum(@Param('id') id: string) {
    return;
  }
}
