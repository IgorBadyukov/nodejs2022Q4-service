import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUpdateAlbumDto {
  @IsNotEmpty({ message: 'Body need to have fields name' })
  @ApiProperty()
  name: string;

  @IsNotEmpty({ message: 'Body need to have fields name' })
  @ApiProperty()
  year: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  artistId: string | null; // refers to Artist
}
