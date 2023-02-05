import { HttpException, Injectable } from '@nestjs/common';
import { IAlbum, IArtist, IFavorites, ITrack } from '../../utils/types/types';
import { favourites } from '../../data/favourites';
import { uuidValidateV4 } from '../../utils/utils';
import { tracks } from '../../data/tracks';
import { artists } from '../../data/artists';
import { albums } from '../../data/albums';

@Injectable()
export class FavoritesService {
  async getAll(): Promise<IFavorites> {
    return new Promise<IFavorites>((resolve, reject) => {
      resolve(favourites);
    });
  }

  async addTrack(id: string) {
    return new Promise<ITrack>((resolve, reject) => {
      const track = tracks.find((u) => u.id === id);
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      } else if (!track) {
        reject(new HttpException('Track not found', 404));
      }
      favourites.tracks.push(track);
      resolve(track);
    });
  }

  async removeTrack(id: string) {
    return new Promise<string>((resolve, reject) => {
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const track = favourites.tracks.find((u) => u.id === id);
      if (!track) {
        reject(new HttpException('Favorites track not found', 404));
      }
      favourites.tracks.forEach((elem, i) => {
        if (elem.id === id) favourites.tracks.splice(i, 1);
      });
      resolve('Favorites track deleted successfully');
    });
  }

  async addArtist(id: string) {
    return new Promise<IArtist>((resolve, reject) => {
      const artist = artists.find((u) => u.id === id);
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      } else if (!artist) {
        reject(new HttpException('Artist not found', 404));
      }
      favourites.artists.push(artist);
      resolve(artist);
    });
  }

  async removeArtist(id: string) {
    return new Promise<string>((resolve, reject) => {
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const artist = favourites.artists.find((u) => u.id === id);
      if (!artist) {
        reject(new HttpException('Favorites artist not found', 404));
      }
      favourites.artists.forEach((elem, i) => {
        if (elem.id === id) artists.splice(i, 1);
      });
      resolve('Favorites artist deleted successfully');
    });
  }

  async addAlbum(id: string) {
    return new Promise<IAlbum>((resolve, reject) => {
      const album = albums.find((u) => u.id === id);
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      } else if (!album) {
        reject(new HttpException('Album not found', 404));
      }
      favourites.albums.push(album);
      resolve(album);
    });
  }

  async removeAlbum(id: string) {
    return new Promise<string>((resolve, reject) => {
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const album = favourites.albums.find((u) => u.id === id);
      if (!album) {
        reject(new HttpException('Album not found', 404));
      }
      favourites.albums.forEach((elem, i) => {
        if (elem.id === id) albums.splice(i, 1);
      });
      resolve('Album deleted successfully');
    });
  }
}
