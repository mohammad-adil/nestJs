import { Injectable } from "@nestjs/common";
import { messagesRepository } from "./messages.respository";
@Injectable()
export class MessagesService{
constructor(public messageRepo: messagesRepository){}

 findOne(id:string){
    return this.messageRepo.findOne(id)
}
 findAll(){
    return this.messageRepo.findAll()
}
create(content:string){
    return this.messageRepo.create(content)
}
}