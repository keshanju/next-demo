import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class DepositService {
    constructor(@InjectModel('depositKY') protected readonly depositKY: Model<any>) {

    }
}
