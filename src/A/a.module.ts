import { Module } from '@nestjs/common'
import { BService } from 'src/B/b.service'
import { AService } from './a.service'

@Module({
  providers: [AService, BService],
  exports: [AService],
})
export class AModule {}
