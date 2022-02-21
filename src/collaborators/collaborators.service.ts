import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCollaboratorDto } from './dto/create-collaborator.dto';
import { UpdateCollaboratorDto } from './dto/update-collaborator.dto';
import { Collaborator } from './models/collaborators.model';
import { Model } from 'mongoose';

@Injectable()
export class CollaboratorsService {
  constructor(
    @InjectModel('Collaborator')
    private readonly collaboratorsModel: Model<Collaborator>,
) 
{}

  public async createCollaborator(createCollaboratorDto: CreateCollaboratorDto): Promise<Collaborator> {
    const collaborator = new this.collaboratorsModel(createCollaboratorDto)
    return collaborator.save()
  }

  public async findAll() {
    return this.collaboratorsModel.find()
  }

  public async findOne(id: any) {
    return this.collaboratorsModel.findById(id)
  }

  public async update(id: string, updateCollaboratorDto: UpdateCollaboratorDto) {
    return this.collaboratorsModel.findByIdAndUpdate(id, updateCollaboratorDto, { new: true })
  }

  public async remove(id: string) {
    return this.collaboratorsModel.findByIdAndDelete(id)
  }
}
