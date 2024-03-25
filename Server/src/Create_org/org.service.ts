// org.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { org } from './org.entity';

@Injectable()
export class OrgService {
    constructor(
        @InjectRepository(org)
        private orgRepository: Repository<org>,
    ) {}

    async register(orgDetails: org): Promise<org> {
        const newOrg = this.orgRepository.create(orgDetails);
        await this.orgRepository.save(newOrg);
        return newOrg;
    }
}