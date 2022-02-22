import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JoinProjectDto } from './dto/join-collaborator.dto';
import { Model } from 'mongoose';
import { Relations } from './models/relations.model';
import { CollaboratorsService } from 'src/collaborators/collaborators.service';
import { ProjectsService } from 'src/projects/projects.service';

@Injectable()
export class RelationsService {
    constructor(
        @InjectModel('Relation')
        private readonly relationsModel: Model<Relations>,

        private readonly collaboratorsService: CollaboratorsService,
        private readonly projectsService: ProjectsService
    ) {}

    public async joinProject(collaboratorId, projectName, login: JoinProjectDto) {
        const existsCollab = this.collaboratorsService.collaboratorExists(collaboratorId)
        const existsProject = this.projectsService.projectNameExists(projectName)
        if(await existsCollab && await existsProject) {
            const relation = new this.relationsModel({...login, projectName: projectName, collaboratorId: collaboratorId})
            return relation.save()
        } else {
            throw new UnauthorizedException()
        }
    }
}
