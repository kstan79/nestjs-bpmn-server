import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BPMNModule} from './bpmn/bpmn.module'

@Module({
  imports: [BPMNModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
