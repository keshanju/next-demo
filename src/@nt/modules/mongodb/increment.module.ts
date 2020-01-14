import { Module, Global } from '@nestjs/common';
import { IncrementService } from './increment.service';
import { MongooseModule } from "@nestjs/mongoose";
import { incrementSchema } from "./increment.schema";

@Global()
@Module({
    imports: [MongooseModule.forFeature(
        [{ name: "sys_increment", schema: incrementSchema }]
    )],
    controllers: [],
    providers: [IncrementService],
    exports: [IncrementService]
})
export class IncrementModule { }
