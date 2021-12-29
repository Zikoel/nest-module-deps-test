import { Module } from '@nestjs/common'
import { CModule } from 'src/C/c.module'
import { CService } from 'src/C/c.service'
import { BService } from './b.service'

@Module({
  imports: [CModule],
  providers: [BService, CService],
  exports: [BService],
})
export class BModule {}
