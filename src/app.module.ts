import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { TasksModule } from './tasks/tasks.module';
import ORMConfig from './ormconfig';

const routes: Routes = [
  {
    path: '/boards/:boardId/tasks',
    module: TasksModule,
    children: [
      {
        path: '/:boardId/tasks',
        module: TasksModule,
      },
    ],
  },
];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ORMConfig,
    }),
    // RouterModule.forRoutes(routes),
    UsersModule,
    BoardsModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
