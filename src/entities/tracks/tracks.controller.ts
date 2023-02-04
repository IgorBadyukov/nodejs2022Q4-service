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
import { TracksService } from './tracks.service';
import { IArtist, ITrack } from '../../types/types';
import { CreateUpdateArtistDto } from '../artists/dto/create-update-artist.dto';
import {CreateUpdateTrackDto} from "./dto/create-update-track.dto";

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}

  @Get()
  @HttpCode(200)
  async getAll(): Promise<ITrack[]> {
    return this.tracksService.getAll();
  }

  @Get(':id')
  @HttpCode(200)
  async getTrack(@Param('id') id: string): Promise<ITrack> {
    return this.tracksService.getTrack(id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createArtist(
    @Body() createTrackDto: CreateUpdateTrackDto,
  ): Promise<ITrack> {
    return this.tracksService.createTrack(createTrackDto);
  }

  @Put(':id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async updateArtist(
    @Body() updateTrackDto: CreateUpdateTrackDto,
    @Param('id') id: string,
  ): Promise<ITrack> {
    return this.tracksService.updateTrack(updateTrackDto, id);
  }

  @HttpCode(204)
  @Delete(':id')
  async removeArtist(@Param('id') id: string) {
    return this.tracksService.removeTrack(id);
  }
}
