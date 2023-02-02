import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('favs')
export class FavoritesController {
  @Get()
  getAll(): string {
    return 'This action returns all favorites';
  }

  @Post('track/:id')
  addTrack(@Param('id') id: string): string {
    return 'This action returns one favourite track by id';
  }

  @Delete('track/:id')
  removeTrack(@Param('id') id: string) {
    return `Hello track ${id}`;
  }

  @Post('album/:id')
  addAlbum(@Param('id') id: string): string {
    return 'This action returns one favourite track by id';
  }

  @Delete('album/:id')
  removeAlbum(@Param('id') id: string) {
    return;
  }

  @Post('artist/:id')
  addArtist(@Param('id') id: string): string {
    return 'This action returns one favourite track by id';
  }

  @Delete('artist/:id')
  removeArtist(@Param('id') id: string) {
    return;
  }
}
