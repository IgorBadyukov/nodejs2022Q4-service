import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateUpdateAlbumDto } from './dto/create-update-album.dto';
import { IAlbum } from '../../utils/types/types';

@Controller('album')
export class AlbumsController {
  constructor(private albumsService: AlbumsService) {}

  @Get()
  async getAll(): Promise<IAlbum[]> {
    return this.albumsService.getAll();
  }

  @Get(':id')
  @HttpCode(200)
  getAlbum(@Param('id') id: string): Promise<IAlbum> {
    return this.albumsService.getAlbum(id);
  }

  @Post()
  @HttpCode(201)
  createAlbum(@Body() createAlbum: CreateUpdateAlbumDto): Promise<IAlbum> {
    return this.albumsService.createAlbum(createAlbum);
  }

  @Put(':id')
  @HttpCode(200)
  updateAlbum(
    @Body() updateAlbum: CreateUpdateAlbumDto,
    @Param('id') id: string,
  ): Promise<IAlbum> {
    return this.albumsService.updateAlbum(updateAlbum, id);
  }

  @Delete(':id')
  @HttpCode(204)
  removeAlbum(@Param('id') id: string): Promise<string> {
    return this.albumsService.removeAlbum(id);
  }
}
