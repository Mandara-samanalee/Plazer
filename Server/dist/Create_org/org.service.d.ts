import { Repository } from 'typeorm';
import { org } from './org.entity';
export declare class OrgService {
    private orgRepository;
    constructor(orgRepository: Repository<org>);
    register(orgDetails: org): Promise<org>;
}
