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
        const validation1 = this.verifiesCollaborator(collaboratorId)
        const validation2 = this.verifiesProject(projectName)
        if(validation1 && validation2) {
            const relation = new this.relationsModel(login)
            return {relation, projectName: projectName, collaboratorId: collaboratorId}
        } else {
            throw new UnauthorizedException()
        }
    }

    public async verifiesCollaborator(collaboratorId) {
        try {
            const validation = this.collaboratorsService.findOne({collaboratorId})
            if(validation) {
                return true
            }
        } catch (err) {
            return false
        }
    }

    public async verifiesProject(projectName) {
        try {
            const validation = this.projectsService.findOne(projectName)
            if(validation) {
                return true
            }
        } catch (err) {
            return false
        }
    }
}
