import { Model, Document } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
export interface IndexInderFace extends Document {
  readonly ID: number;
  readonly name: string;
  readonly age: number;
  readonly sex: boolean;
  readonly addr: string;
  readonly createDate: string
}
@Injectable()
export class IndexService {
  constructor(@InjectModel('depositKY') private readonly indexModel: Model<IndexInderFace>) {  }

  async create(indexDto: IndexInderFace):Promise<IndexInderFace> {
    const createIndex = new this.indexModel(indexDto);
    return createIndex.save();
  }

  async fondAll():Promise<IndexInderFace> {
    return this.indexModel.find().exec();
  }
}