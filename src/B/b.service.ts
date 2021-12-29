import { Injectable } from '@nestjs/common'
import { CService } from 'src/C/c.service'

@Injectable()
export class BService {
  constructor(private c: CService) {}

  bFunc(): string {
    return `B called, now call C -> ${this.c.cFunc()}`
  }
}
