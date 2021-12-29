import { Injectable } from '@nestjs/common'

@Injectable()
export class CService {
  cFunc(): string {
    return `C called`
  }
}
