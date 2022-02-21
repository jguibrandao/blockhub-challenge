import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsController } from './collaborators.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { CollaboratorsSchema } from './schemas/collaborator.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Collaborator",
        schema: CollaboratorsSchema
      }
    ]),

    UsersModule
  ],
  controllers: [CollaboratorsController],
  providers: [CollaboratorsService]
})
export class CollaboratorsModule {}
