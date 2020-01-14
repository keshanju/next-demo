import * as mongoose from 'mongoose'

const bankAcctSchema = new mongoose.Schema({
    ID: { type: Number, default: 0 }, // 公账ID
    payeeName: { type: String, default: '' }, // 公账收款人
    payeeAcct: { type: String, default: '' }, // 公账收款账号
});
export const DepositSchema = new mongoose.Schema({
    ID: { type: Number, index: true, unique: true },
    bankRefNo: { type: String, default: '' }, // 入金订单表
    mtRefNo: { type: String, default: null }, // mt订单号
    accountNumber: { type: Number, default: null }, // 用户accountNumber
    clnName: { type: String, default: null }, // 用户名
    tradeAccount: { type: String, default: null }, // 用户交易账户
    tradeAccountType: { type: String, default: null }, // 交易账户类型
    createDate: { type: Date, required: true }, // 创建时间
    currStatus: { type: String, default: '' }, // 状态 V 未完成 U 待处理 C 客戶取消 R 公司拒絕 S 成功 F 渠道失败 L 上锁
    reason: { type: Number, default: 0 }, // 理由
    fromCcy: { type: String, default: '' }, // 入金币种
    fromAmt: { type: Number, default: 0 }, // 入金金额
    rate: { type: Number, default: 0 }, // 汇率
    mt4Amt: { type: Number, default: 0 }, // 轉換至MT帳戶金额
    mt4Currency: { type: String, default: '' }, // MT帳戶幣種
    channel: { type: String, default: '' }, // 渠道
    fee: { type: Number, default: 0 }, // 手续费
    charge: { type: Number, default: 0 }, // 费率
    proof: { type: String, default: null }, // 凭证
    remark: { type: String, default: null }, // 备注
    bankAcctInfo: bankAcctSchema, // P2C公账信息
    lastUpdateDate: { type: Date, default: null }, // 最后修改时间
    updateBy: { type: String, default: '' }, // 修改人
    processBy: { type: String, default: '' }, // 处理人
    statusModifier: { type: String, default: '' }, // 验证中转未处理修改人
  }, {
    collection: 'atfx_deposit'
})