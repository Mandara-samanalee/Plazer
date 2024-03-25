import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { OtpModule } from './otp_func/otp.module';
import { Otp } from './otp_func/otp.entity';

import { Project } from './project_func/project.entity';
import { ProjectModule } from './project_func/project.module';

import { OrgModule } from './Create_org/org.module';
import { org } from './Create_org/org.entity';



@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      database: 'plazer_db',
      password: '1234',
      entities: [Otp, org, Project],
      synchronize: true,
      ssl: false
    }),
    OrgModule,
    OtpModule,
    ProjectModule
  ]
})
export class AppModule {}
