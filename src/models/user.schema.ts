import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    age: Number,
    sex: Boolean,
  },
  {
    collection: 'tb_user'
  }
);
