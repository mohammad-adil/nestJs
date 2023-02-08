import { messagesRepository } from "./messages.respository";

export class MessagesService{
messagesRepo : messagesRepository;
    constructor(){
this.messagesRepo =  new messagesRepository()
}

 findOne(id:string){
    return this.messagesRepo.findOne(id)
}

 findAll(){
    return this.messagesRepo.findAll()
}
create(content:string){
    return this.messagesRepo.create(content)
}
}