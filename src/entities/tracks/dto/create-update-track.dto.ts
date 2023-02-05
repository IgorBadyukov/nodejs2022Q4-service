import { ApiProperty } from "@nestjs/swagger";

export class CreateUpdateTrackDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  artistId: string | null; // refers to Artist

  @ApiProperty()
  albumId: string | null; // refers to Album

  @ApiProperty()
  duration: number; // integer number
}
