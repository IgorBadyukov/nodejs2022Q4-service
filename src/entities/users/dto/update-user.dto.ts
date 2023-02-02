import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: 'Body need to have old password' })
  oldPassword: string; // previous password

  @IsNotEmpty({ message: 'Body need to have new password' })
  newPassword: string;
}
