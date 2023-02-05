import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUpdateArtistDto {
  @ApiProperty()
  @IsString({ message: 'Body need to have fields name (type string)' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Body need to have fields grammy (type string)' })
  grammy: boolean;
}
