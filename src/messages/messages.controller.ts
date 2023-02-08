import { Controller,Get ,Post,Body,Param} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')

export class MessagesController {
@Get()
listMessages(){
    return " Lets get messages"
}
@Post()
createMessages(@Body() body:CreateMessageDto){
   console.log(body)



}
@Get('/:id')
getMessages(@Param('id')id:String){
console.log(id)
}

}
