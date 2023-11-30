import { ApiProperty } from '@nestjs/swagger';

export class SampleApiSchema {
  @ApiProperty({ type: 'string', required: false, format: 'uuid', default: '' })
  id: string;
  @ApiProperty({ type: 'number', required: false, default: 1 })
  tenantId: number;
  @ApiProperty({ type: 'string', required: true, default: '' })
  name: string;
  @ApiProperty({ type: 'string', required: true, default: '' })
  email: string;
  @ApiProperty({ type: 'number', required: true, default: 0 })
  age: number;
}

