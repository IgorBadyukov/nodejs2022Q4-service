import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUpdateAlbumDto {
  @IsString({ message: 'Body need to have fields name (type string)' })
  @ApiProperty()
  name: string;

  @IsString({ message: 'Body need to have fields year (type number)' })
  @ApiProperty()
  year: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  artistId: string | null; // refers to Artist
}
