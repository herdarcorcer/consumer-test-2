import { Injectable, Inject } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { User } from 'src/schemas/consumer.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ConsumerService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user);
    return res;
  }
}