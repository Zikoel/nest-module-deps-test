import { Injectable } from '@nestjs/common'
import { AService } from './A/a.service'

@Injectable()
export class AppService {
  constructor(private a: AService) {}

  getHello(): string {
    return `Hello World: ${this.a.aFunc()}`
  }
}
