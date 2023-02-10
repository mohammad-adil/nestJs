import { Controller,Get ,Post,Body,Param, NotFoundException, BadRequestException, UnauthorizedException} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController {
    messagesService : MessagesService;
    constructor(public messageService: MessagesService){}
    
@Get()
listMessages(){
    return this.messageService.findAll()
}

@Post()
createMessages(@Body() body:CreateMessageDto){
  return this.messageService.create(body.content)
}
@Get('/:id')
async getMessages(@Param('id')id:string){
const data = await this.messageService.findOne(id)
if(!data) {throw new NotFoundException("Message not found")
}
return data
}

}
