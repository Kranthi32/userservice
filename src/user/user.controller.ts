import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
 
  @MessagePattern({cmd: 'register_user'})
  async registerUser(@Payload() message: User) : Promise<User>
{
  const bodyData : any = {
    name : message.name,
    email : message.email,
    password : message.password,
    phone: message.phone
  }
  return await this.userService.create(bodyData)
}
}