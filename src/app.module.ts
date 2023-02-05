import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './entities/users/users.module';
import { AlbumsModule } from './entities/albums/albums.module';
import { ArtistsModule } from './entities/artists/artists.module';
import { TracksModule } from './entities/tracks/tracks.module';
import { FavoritesModule } from './entities/favorites/favorites.module';

@Module({
  imports: [
    UsersModule,
    AlbumsModule,
    ArtistsModule,
    FavoritesModule,
    TracksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
