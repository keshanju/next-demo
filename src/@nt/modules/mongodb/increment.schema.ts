import * as mongoose from 'mongoose';

export const incrementSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, required: true }
}, {
    collection: "sys_increment"
});