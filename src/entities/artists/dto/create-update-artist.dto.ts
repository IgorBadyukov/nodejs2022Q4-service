import { IsNotEmpty } from 'class-validator';

export class CreateUpdateArtistDto {
  @IsNotEmpty({ message: 'Body need to have fields name' })
  name: string;

  @IsNotEmpty({ message: 'Body need to have fields grammy' })
  grammy: boolean;
}
