import { IsString} from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'Body need to have old password' })
  oldPassword: string; // previous password

  @IsString({ message: 'Body need to have new password' })
  newPassword: string;
}
