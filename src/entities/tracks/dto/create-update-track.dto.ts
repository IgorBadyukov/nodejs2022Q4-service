import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUpdateTrackDto {
  @IsString({ message: 'Body need to have fields name (type string)' })
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  artistId: string | null; // refers to Artist

  @IsString()
  @IsOptional()
  @ApiProperty()
  albumId: string | null; // refers to Album

  @IsString()
  @IsOptional()
  @ApiProperty()
  duration: number; // integer number
}
