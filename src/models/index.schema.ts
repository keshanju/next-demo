import * as mongoose from 'mongoose';

export const indexSchema = new mongoose.Schema({
    ID: { type: Number, default: null },
    name: { type: String, default: null },
    age: { type: Number, default: null },
    sex: { type: Boolean, default: null },
    addr: { type: String, default: null },
    createData: { type: Date, default: null }
}, {
    collection: "tb_index"
})