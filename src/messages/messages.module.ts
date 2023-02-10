import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService  } from './messages.service';
import { messagesRepository } from './messages.respository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService,messagesRepository]
})
export class MessagesModule {}
