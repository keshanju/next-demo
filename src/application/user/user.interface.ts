import { Document } from 'mongoose';

export interface UserModel extends Document {
  readonly id: number;
  readonly name: string;
  readonly age: number;
  readonly sex: boolean;
}
