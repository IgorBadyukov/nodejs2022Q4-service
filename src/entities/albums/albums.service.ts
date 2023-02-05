import { HttpException, Injectable } from '@nestjs/common';
import { IAlbum } from '../../utils/types/types';
import { albums } from '../../data/albums';
import { CreateUpdateAlbumDto } from './dto/create-update-album.dto';
import { uuidValidateV4 } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';
import {tracks} from "../../data/tracks";

@Injectable()
export class AlbumsService {
  async getAll(): Promise<IAlbum[]> {
    return new Promise<IAlbum[]>((resolve, reject) => {
      resolve(albums);
    });
  }

  async getAlbum(id: string): Promise<IAlbum> {
    return new Promise<IAlbum>((resolve, reject) => {
      const album = albums.find((u) => u.id === id);
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      } else if (!album) {
        reject(new HttpException('Album not found', 404));
      }
      resolve(album);
    });
  }

  async createAlbum(albumDto: CreateUpdateAlbumDto): Promise<IAlbum> {
    return new Promise<IAlbum>((resolve, reject) => {
      const newAlbum = {
        id: uuidv4(),
        ...albumDto,
      } as IAlbum;
      albums.push(newAlbum);
      resolve(newAlbum);
    });
  }

  async updateAlbum(albumDto: CreateUpdateAlbumDto, id: string) {
    return new Promise<IAlbum>((resolve, reject) => {
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const album = albums.find((u) => u.id === id);
      if (!album) {
        reject(new HttpException('Album not found', 404));
      }
      for (let i = 0; i < albums.length; i++) {
        if (albums[i].id === id) {
          albums[i].name = albumDto.name;
          albums[i].year = albumDto.year;
          albums[i].artistId = albumDto.artistId;
          resolve(albums[i]);
        }
      }
    });
  }

  async removeAlbum(id: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const album = albums.find((u) => u.id === id);
      if (!album) {
        reject(new HttpException('Album not found', 404));
      }
      albums.forEach((elem, i) => {
        if (elem.id === id) albums.splice(i, 1);
      });
      resolve('Album deleted successfully');
    });
  }
}
