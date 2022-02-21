import { Module } from '@nestjs/common';
import { RelationsService } from './relations.service';
import { RelationsController } from './relations.controller';
import { RelationSchema } from './schemas/relation.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorsModule } from 'src/collaborators/collaborators.module';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Relation",
        schema: RelationSchema
      }
    ]),

    CollaboratorsModule,
    ProjectsModule
  ],
  controllers: [RelationsController],
  providers: [RelationsService]
})
export class RelationsModule {}
