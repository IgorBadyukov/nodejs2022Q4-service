import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUpdateArtistDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Body need to have fields name' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Body need to have fields grammy' })
  grammy: boolean;
}
