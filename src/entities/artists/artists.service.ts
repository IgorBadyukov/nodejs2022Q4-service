import { HttpException, Injectable } from '@nestjs/common';
import { IArtist, IUser } from '../../utils/types/types';
import { artists } from '../../data/artists';
import { v4 as uuidv4 } from 'uuid';
import { CreateUpdateArtistDto } from './dto/create-update-artist.dto';
import {uuidValidateV4} from "../../utils/utils";


@Injectable()
export class ArtistsService {
  async getAll() {
    return new Promise<IArtist[]>((resolve, reject) => {
      resolve(artists);
    });
  }

  async getArtist(id: string) {
    return new Promise<IArtist>((resolve, reject) => {
      const artist = artists.find((u) => u.id === id);
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      } else if (!artist) {
        reject(new HttpException('Artist not found', 404));
      }
      resolve(artist);
    });
  }

  async createArtist(artistDto: CreateUpdateArtistDto) {
    return new Promise<IArtist>((resolve, reject) => {
      if (Object.keys(artistDto).length !== 2) {
        reject(new HttpException('Body has excess fields', 400));
      }
      const newArtist = {
        id: uuidv4(),
        ...artistDto,
      } as IArtist;
      artists.push(newArtist);
      resolve(newArtist);
    });
  }

  async updateArtist(artistDto: CreateUpdateArtistDto, id: string) {
    return new Promise<IArtist>((resolve, reject) => {
      if (Object.keys(artistDto).length !== 2) {
        reject(new HttpException('Body has excess fields', 400));
      }
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const artist = artists.find((u) => u.id === id);
      if (!artist) {
        reject(new HttpException('Artist not found', 404));
      }
      for (let i = 0; i < artists.length; i++) {
        if (artists[i].id === id) {
          artists[i].name = artistDto.name;
          artists[i].grammy = artistDto.grammy;
          resolve(artists[i]);
        }
      }
    });
  }

  async removeArtist(id: string) {
    return new Promise<string>((resolve, reject) => {
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const artist = artists.find((u) => u.id === id);
      if (!artist) {
        reject(new HttpException('Artist not found', 404));
      }
      artists.forEach((elem, i) => {
        if (elem.id === id) artists.splice(i, 1);
      });
      resolve('Artist deleted successfully');
    });
  }
}
