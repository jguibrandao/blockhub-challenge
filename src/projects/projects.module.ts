import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { ProjectsSchema } from './schemas/projects.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Project",
        schema: ProjectsSchema
      }
    ]),

    UsersModule
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
