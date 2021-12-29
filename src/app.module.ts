import { Module } from '@nestjs/common'
import { AService } from './A/a.service'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  controllers: [AppController, AService],
  providers: [AppService],
})
export class AppModule {}
