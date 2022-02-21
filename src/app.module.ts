import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { RelationsModule } from './relations/relations.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProjectsModule,
    CollaboratorsModule,
    RelationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
