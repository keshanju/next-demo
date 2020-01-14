import * as mongoose from 'mongoose'

export const catSchema = new mongoose.Scheam({
    ID: { type: Number, default: null }
}, {
    collection: 'tb_cat'
})