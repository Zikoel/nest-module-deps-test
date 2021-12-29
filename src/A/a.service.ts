import { Injectable } from '@nestjs/common'
import { BService } from 'src/B/b.service'

@Injectable()
export class AService {
  constructor(private b: BService) {}

  aFunc(): string {
    return `A called, now call B -> ${this.b.bFunc()}`
  }
}
