import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Config } from './data-source';
@Module({
  imports: [TypeOrmModule.forRoot(Config),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
