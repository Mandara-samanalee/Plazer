// org.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { OrgService } from './org.service';
import { org } from './org.entity';

@Controller('org')
export class OrgController {
    constructor(private orgService: OrgService) {}

    @Post('register')
    register(@Body() orgDetails: org): Promise<org> {
        return this.orgService.register(orgDetails);
    }
}