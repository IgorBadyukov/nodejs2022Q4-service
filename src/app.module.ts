import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './entities/users/users.controller';
import { ArtistsController } from './entities/artists/artists.controller';
import { AlbumsController } from './entities/albums/albums.controller';
import { FavoritesController } from './entities/favorites/favorites.controller';
import { UsersService } from './entities/users/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    ArtistsController,
    AlbumsController,
    FavoritesController,
  ],
  providers: [AppService, UsersService],
})
export class AppModule {}
