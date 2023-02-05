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
import { CreateUpdateArtistDto } from './dto/create-update-artist.dto';
import { ArtistsService } from './artists.service';
import { IArtist } from '../../utils/types/types';

@Controller('artist')
export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}

  @Get()
  @HttpCode(200)
  async getAll(): Promise<IArtist[]> {
    return this.artistsService.getAll();
  }

  @Get(':id')
  @HttpCode(200)
  async getArtist(@Param('id') id: string): Promise<IArtist> {
    return this.artistsService.getArtist(id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createArtist(
    @Body() createArtistDto: CreateUpdateArtistDto,
  ): Promise<IArtist> {
    return this.artistsService.createArtist(createArtistDto);
  }

  @Put(':id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async updateArtist(
    @Body() updateArtistDto: CreateUpdateArtistDto,
    @Param('id') id: string,
  ): Promise<IArtist> {
    return this.artistsService.updateArtist(updateArtistDto, id);
  }

  @HttpCode(204)
  @Delete(':id')
  async removeArtist(@Param('id') id: string) {
    return this.artistsService.removeArtist(id);
  }
}
