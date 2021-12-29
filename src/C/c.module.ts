import { Module } from '@nestjs/common'
import { CService } from './c.service'

@Module({
  providers: [CService],
  exports: [CService],
})
export class CModule {}
