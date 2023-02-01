import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artist')
export class ArtistsController {
  @Get()
  getAll(): string {
    return 'This action returns all albums';
  }

  @Get(':id')
  getArtist(@Param('id') id: string): string {
    return 'This action returns one albums by id';
  }

  @Post()
  createArtist(@Body() createArtistDto: CreateArtistDto) {
    return;
  }

  @Put(':id')
  updateArtist(
    @Body() updateArtistDto: UpdateArtistDto,
    @Param('id') id: string,
  ) {
    return;
  }

  @Delete(':id')
  removeArtist(@Param('id') id: string) {
    return;
  }
}
