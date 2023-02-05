import { HttpException, Injectable } from '@nestjs/common';
import { ITrack } from '../../utils/types/types';
import { v4 as uuidv4 } from 'uuid';
import { tracks } from '../../data/tracks';
import { CreateUpdateTrackDto } from './dto/create-update-track.dto';
import { uuidValidateV4 } from '../../utils/utils';

@Injectable()
export class TracksService {
  async getAll() {
    return new Promise<ITrack[]>((resolve, reject) => {});
  }

  async getTrack(id: string) {
    return new Promise<ITrack>((resolve, reject) => {
      const track = tracks.find((u) => u.id === id);
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      } else if (!track) {
        reject(new HttpException('Track not found', 404));
      }
      resolve(track);
    });
  }

  async createTrack(trackDto: CreateUpdateTrackDto) {
    return new Promise<ITrack>((resolve, reject) => {
      const newTrack = {
        id: uuidv4(),
        ...trackDto,
      } as ITrack;
      tracks.push(newTrack);
      resolve(newTrack);
    });
  }

  async updateTrack(trackDto: CreateUpdateTrackDto, id: string) {
    return new Promise<ITrack>((resolve, reject) => {
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const track = tracks.find((u) => u.id === id);
      if (!track) {
        reject(new HttpException('Track not found', 404));
      }
      for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].id === id) {
          resolve(tracks[i]);
        }
      }
    });
  }

  async removeTrack(id: string) {
    return new Promise<string>((resolve, reject) => {
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const track = tracks.find((u) => u.id === id);
      if (!track) {
        reject(new HttpException('Track not found', 404));
      }
      tracks.forEach((elem, i) => {
        if (elem.id === id) tracks.splice(i, 1);
      });
      resolve('Track deleted successfully');
    });
  }
}
