import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, User } from './models/user.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.UserModel(createUserDto);
    return user.save();
  }

  async getMany(): Promise<Array<User>> {
    const documents = await this.UserModel.find().exec();
    return documents.map((x) => User.fromDocument(x));
  }

  async getOne(): Promise<User> {
    const document = await this.UserModel.findOne().exec();
    return User.fromDocument(document);
  }

  getUser(): User {
    return new User({ firstName: 'John', lastName: 'Doe' });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
