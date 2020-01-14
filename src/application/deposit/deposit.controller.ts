import { Controller } from '@nestjs/common';
import { PureController } from 'src/@nt';
import { DepositService } from './deposit.service'

@Controller('deposit')
export class DepositController extends PureController {
    constructor(protected readonly service: DepositService) { super(service) }
}
