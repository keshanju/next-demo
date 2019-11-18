import { Document } from 'mongoose';

export class CreateUserDto extends Document {

  readonly id: number;
  readonly name: string;
  readonly age: number;
  readonly sex: boolean;
}
