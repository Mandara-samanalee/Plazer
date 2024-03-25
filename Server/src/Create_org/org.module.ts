import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { org } from "./org.entity";
import { OrgService } from "./org.service";
import { OrgController } from "./org.controller";

@Module({
    imports:[TypeOrmModule.forFeature([org])],
    providers: [OrgService],
    controllers: [OrgController],
    exports: [TypeOrmModule]
})

export class OrgModule {}