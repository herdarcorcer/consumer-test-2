import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ConsumerService } from './consumer.service';
import { CreateUserRequest } from '../dto/create-user.dto';
import { User } from 'src/schemas/consumer.schema';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

@MessagePattern({cmd: 'users-get'})
  async getAllUsers(): Promise<User[]> {
    return this.consumerService.findAll();
  }

@MessagePattern({cmd: 'users-post'})
  async createUser(
    @Body()
    user: CreateUserRequest,
  ): Promise<User> {
    return this.consumerService.create(user);
  }

}


