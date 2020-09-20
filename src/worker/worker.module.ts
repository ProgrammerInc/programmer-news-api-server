import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from '../article/article.module';
import { FeedModule } from '../feed/feed.module';
import { PrismaModule } from '../prisma/prisma.module';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    ArticleModule,
    FeedModule,
  ],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}