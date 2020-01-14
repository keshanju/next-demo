import { Document } from 'mongoose';

export class CreateUserDto extends Document {
  readonly id: number;
  readonly name: string;
  readonly age: number;
  readonly sex: boolean;
}

export class UpdateUserDto {

}

export class UserEntitles {
  
}
// DTO(数据传输对象)模式。DTO是一个对象，它定义了如何通过网络发送数据