import { Controller,Get ,Post,Body,Param, NotFoundException, BadRequestException, UnauthorizedException} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')

export class MessagesController {
    messagesService : MessagesService;
    constructor(){
        this.messagesService = new MessagesService()
    }
@Get()
listMessages(){
    return this.messagesService.findAll()
}

@Post()
createMessages(@Body() body:CreateMessageDto){
  return this.messagesService.create(body.content)
}
@Get('/:id')
async getMessages(@Param('id')id:string){
const data = await this.messagesService.findOne(id)
if(!data) {throw new NotFoundException("Message not found")
}
return data
}

}
