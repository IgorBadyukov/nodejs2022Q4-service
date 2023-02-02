import { HttpException, Injectable } from '@nestjs/common';
import { users } from '../../data/users';
import { CreateUserDto } from './dto/create-user.dto';
import {
  v4 as uuidv4,
  version as uuidVersion,
  validate as uuidValidate,
} from 'uuid';
import { IUser } from '../../types/types';
import { UpdateUserDto } from './dto/update-user.dto';

function uuidValidateV4(uuid: string) {
  return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

@Injectable()
export class UsersService {
  async getAll() {
    return new Promise<IUser[]>((resolve, reject) => {
      resolve(users);
    });
  }

  async getUser(id: string) {
    return new Promise<IUser>((resolve, reject) => {
      const user = users.find((u) => u.id === id);
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      } else if (!user) {
        reject(new HttpException('User not found', 404));
      }
      resolve(user);
    });
  }

  createUser(userDto: CreateUserDto) {
    return new Promise<IUser>((resolve, reject) => {
      if (Object.keys(userDto).length !== 2) {
        reject(new HttpException('Body has excess fields', 400));
      }
      const newUser = {
        id: uuidv4(),
        ...userDto,
        version: 1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      } as IUser;
      users.push(newUser);
      resolve(newUser);
    });
  }

  updateUser(userDto: UpdateUserDto, id: string) {
    return new Promise<IUser>((resolve, reject) => {
      if (Object.keys(userDto).length !== 2) {
        reject(new HttpException('Body has excess fields', 400));
      }
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const user = users.find((u) => u.id === id);
      if (!user) {
        reject(new HttpException('User not found', 404));
      }
      if (userDto.oldPassword !== user.password) {
        reject(new HttpException('Old password is wrong', 403));
      }
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          users[i].password = userDto.newPassword;
          users[i].version += 1;
          users[i].updatedAt = Date.now();
          resolve(users[i]);
        }
      }
    });
  }

  removeUser(id: string) {
    return new Promise((resolve, reject) => {
      if (!uuidValidateV4(id)) {
        reject(new HttpException('ID not valid', 400));
      }
      const user = users.find((u) => u.id === id);
      if (!user) {
        reject(new HttpException('User not found', 404));
      }
      users.forEach((elem, i) => {
        if (elem.id === id) users.splice(i, 1);
      });
      resolve('User deleted successfully');
    });
  }
}
