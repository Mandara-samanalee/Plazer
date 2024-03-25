import { OrgService } from './org.service';
import { org } from './org.entity';
export declare class OrgController {
    private orgService;
    constructor(orgService: OrgService);
    register(orgDetails: org): Promise<org>;
}
