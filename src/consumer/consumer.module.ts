import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { User, UserSchema } from '../schemas/consumer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule {}