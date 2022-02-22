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
            const relation = new this.relationsModel({...login, projectName: projectName, collaboratorId: collaboratorId})
            return relation.save()
        } else {
            throw new UnauthorizedException()
        }
    }

    public async verifiesCollaborator(collaboratorId) {
        try {
            const validation = await this.collaboratorsService.findOne(collaboratorId)
            if(validation._id) {
                return true
            }
        } catch (err) {
            return false
        }
    }

    public async verifiesProject(projectName) {
        try {
            const validation = await this.projectsService.findOne(projectName)
            if(validation.name) {
                return true
            }
        } catch (err) {
            return false
        }
    }
}
