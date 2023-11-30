import { Injectable,Logger } from '@nestjs/common';
import {BPMNServer} from 'bpmn-server'
import {configuration} from './configuration'


@Injectable()
export class BPMNService {
  private readonly logger = new Logger();

  bpmnServer:BPMNServer
  constructor(){
    this.bpmnServer = new BPMNServer(configuration)
    
  }

  async startWorkflow(workflow:string,data?:any){
    const result =  await this.bpmnServer.engine.start(workflow,data,null,'myuserid');    
    return {
      id: result.id,
      data:result.getData('id'),
      status: result.status,
      userId: result.userId
    }
  }
  async getPendingWorkflows(){
    const tmp:any[] = await this.bpmnServer.dataStore.findInstances({
      status:'running',
    },'summary')    
    const result = tmp.map((proc)=>({
      id: proc.id,
      userId: proc.userId,
      workflowname: proc.name,
      startedAt: proc.startedAt,
      tasks :proc.items
              .filter((task)=>task.status=='wait')
              .map((task)=>({
                id:task.id,
                type:task.type,
                status:task.status,
                name: task.name,
                assignee:task.assignee,
                candidateUsers:task.candidateUsers,
                candidateGroups:task.candidateGroups
              }))
    }))

    return result
  }
}
