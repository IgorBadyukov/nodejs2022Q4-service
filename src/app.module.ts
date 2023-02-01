import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './entities/users/users.controller';
import { ArtistsController } from './entities/artists/artists.controller';
import { AlbumsController } from './entities/albums/albums.controller';
import { FavouritesController } from './entities/favourites/favourites.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    ArtistsController,
    AlbumsController,
    FavouritesController,
  ],
  providers: [AppService],
})
export class AppModule {}
