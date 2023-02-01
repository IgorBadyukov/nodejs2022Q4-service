import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ArtistsController } from './artists/artists.controller';
import { AlbumsController } from './albums/albums.controller';
import { FavouritesController } from './favourites/favourites.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ArtistsController, AlbumsController, FavouritesController],
  providers: [AppService],
})
export class AppModule {}
