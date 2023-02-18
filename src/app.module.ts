import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import config from './config/keys';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI)],
})
export class AppModule {}
