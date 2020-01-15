import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

/**
 * 使用方法，在你自己的service里面，引入这个文件
 * 然后在类的constructor里面新写上protected readonly incrementService: IncrementService
 * 然后你就可以在你自己的函数里使用
 * this.incrementService.INC("写你需要自增的collection").then....
 * 成功返回的结构是
 * {
 *     code: 1,
 *     seq: x
 * }
 * seq就是自增的id
 * 错误类型：1：成功， 2：自增失败
 */

@Injectable()
export class IncrementService {
    constructor(@InjectModel("sys_increment") private readonly incrementModel: Model<any>) {  }

    INC(collection) {
        return new Promise((resolve, reject) => {
            this.getNextId(this.incrementModel, collection).then(res => {
                resolve({
                    code: 1,
                    seq: res.seq
                });
            }).catch(e => {
                reject({
                    code: 0,
                    msg: e
                });
            });
        })
    }

    protected getNextId(model, collectionName) {
        let _step = 1;
        return model.findOneAndUpdate(
            {_id: collectionName},
            {$inc: {seq: _step}},
            {upsert: true, new: true}
        );
    }
}
