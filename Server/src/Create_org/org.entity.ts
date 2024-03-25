import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class org {
    @PrimaryGeneratedColumn('increment')
    orgId: number;

    @Column({ unique: true, length: 500 })
    OrganizationName: string;

    @Column({ length: 150 })
    email: string;

    @Column({ length: 150 })
    contactNo: string;

    @Column({ length: 250 })
    addressLine1: string;

    @Column({ length: 250, nullable: true })
    addressLine2: string;

    @Column({ length: 250, nullable: true})
    addressLine3: string;
}
    