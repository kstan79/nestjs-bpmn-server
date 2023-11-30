import { Module } from '@nestjs/common';
import {BPMNController} from './bpmn.controller'
import {BPMNService} from './bpmn.service'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // Define mongodb collection if you want to access it, refer https://docs.nestjs.com/techniques/mongodb
    // MongooseModule.forFeature([
    //   { name: 'Tenant', schema: TenantMongoSchema },      
    // ]),
  ],
  controllers: [    
    BPMNController,
  ],
  providers: [
    BPMNService,
  ],
  exports: [
    BPMNService,
  ],
})
export class BPMNModule {}
