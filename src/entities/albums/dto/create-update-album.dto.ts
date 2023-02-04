import { IsNotEmpty } from 'class-validator';

export class CreateUpdateAlbumDto {
  @IsNotEmpty({ message: 'Body need to have fields name' })
  name: string;

  @IsNotEmpty({ message: 'Body need to have fields name' })
  year: number;

  @IsNotEmpty({ message: 'Body need to have fields name' })
  artistId: string | null; // refers to Artist
}
