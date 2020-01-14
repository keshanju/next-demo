import { ConfigService } from './../services/ConfigService';
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
    providers: [
        {
            provide: ConfigService,
            useClass: ConfigService,
        },
    ],
    exports: [ConfigService],
})
export class ConfigModule { }
