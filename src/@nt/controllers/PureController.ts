import { DataInterceptor } from '../intercepters/DataIntercepter';
import { UseInterceptors } from '@nestjs/common';
import { HttpStatusCode } from './CodeController';

/**
 * 纯静 Controller 基类
 */
@UseInterceptors(DataInterceptor)
export class PureController {
  constructor(protected readonly service) { }

  /**
   * 统一格式输出
   * @param code Number 代码code值 必填
   * @param data String|Array|Object 返回结果 非必填
   * @param message String 返回信息，默认为空 非必填
   * @return 格式输出 { code:1000, message:"", data:["xxx"] };
   */
  backData(code: HttpStatusCode, data: any = null, message: string = '') {
    try {
      const outputMessage = message === '' ? HttpStatusCode[code] : message;
      return { code, message: outputMessage, data };
    } catch (err) {
      return { code: 500, message: err.message };
    }
  }
  /**
   * 檢查牌照類型
   * @param {string} entity 牌照 必填
   * @return boolean
   */
  checkEntity(entity: string) {
    const entityArray = ['KY', 'GM', 'UK', 'UAE', 'MU'];
    return entityArray.includes(entity);
  }

  /**
   * 檢查MT類型
   * @param mtType MT類型 必填
   */
  checkMtType(mtType: string) {
    const entityArray = ['mt4', 'mt4_demo', 'mt5', 'mt5_demo'];
    return entityArray.includes(mtType);
  }
}
