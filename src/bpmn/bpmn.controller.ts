/**
 * bpmn microservices
 * require endpoints
 * 1. create new process defination
 * 2. start new process *
 * 3. update existing process
 * 4. cancel process *
 * 5. find my process *
 * 6. find all proccess by filter in current tenant *
 * 7. invoke process 
 * 8. get list of proccess
 * 9. get process definations
 * 10. get proccess file
 * 11. getproccessbyid
 * 12. get my proccess by candidate
 */

import { Controller, Get,Post,Req,Param,Body} from '@nestjs/common';
import { BPMNService } from './bpmn.service';
import {SampleApiSchema} from './bpmn.apischema'
import { ApiTags, ApiBody, ApiResponse, ApiOperation } from '@nestjs/swagger';

ApiTags('bpmn')
@Controller('bpmn')
export class BPMNController {
  constructor(private readonly bpmnService: BPMNService) {}

  //get all workflow
  @Get('/')
  getWorkflows() {
    return this.bpmnService.getPendingWorkflows();
  }
  //create workflow
  @Post('/:workflowname')
  @ApiBody({ description: 'create worflow, submit data in json format', type:SampleApiSchema})
  @ApiOperation({
    operationId: 'startWorkflow',
    description: 'start new workflow',
  })
  startWorkflow(
    @Param('workflowname') workflowname:string,
    @Body() data: Object,
    ) {
    return this.bpmnService.startWorkflow(workflowname,data);
  }
  // others required endpoint
  //get /:workflow/:id  //fetch info
  //put /:workflow/:id  //update info
  //post/:workflow/:id/:taskId  //invoke {user:xxx}
  //...
}
