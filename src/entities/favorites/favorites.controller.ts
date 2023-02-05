import { Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { IAlbum, IArtist, IFavorites, ITrack } from '../../utils/types/types';

@Controller('favs')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Get()
  @HttpCode(200)
  async getAll(): Promise<IFavorites> {
    return this.favoritesService.getAll();
  }

  @Post('track/:id')
  @HttpCode(201)
  async addTrack(@Param('id') id: string): Promise<ITrack> {
    return this.favoritesService.addTrack(id);
  }

  @Delete('track/:id')
  @HttpCode(204)
  async removeTrack(@Param('id') id: string): Promise<string> {
    return this.favoritesService.removeTrack(id);
  }

  @Post('album/:id')
  @HttpCode(201)
  async addAlbum(@Param('id') id: string): Promise<IAlbum> {
    return this.favoritesService.addAlbum(id);
  }

  @Delete('album/:id')
  @HttpCode(204)
  async removeAlbum(@Param('id') id: string): Promise<string> {
    return this.favoritesService.removeAlbum(id);
  }

  @Post('artist/:id')
  @HttpCode(201)
  async addArtist(@Param('id') id: string): Promise<IArtist> {
    return this.favoritesService.addArtist(id);
  }

  @Delete('artist/:id')
  @HttpCode(204)
  async removeArtist(@Param('id') id: string): Promise<string> {
    return this.favoritesService.removeArtist(id);
  }
}
