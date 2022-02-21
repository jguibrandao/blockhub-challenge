import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Model } from 'mongoose';
import { Project } from './models/projects.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('Project')
    private readonly projectsModel: Model<Project>
) {}

  public async createProject(createProjectDto: CreateProjectDto) {
    const project = new this.projectsModel(createProjectDto)
    return project.save()
  }

  findAll() {
    return this.projectsModel.find()
  }

  findOne(id: string) {
    return this.projectsModel.findById(id)
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return this.projectsModel.findByIdAndUpdate(id, updateProjectDto, { new: true })
  }

  remove(id: string) {
    return this.projectsModel.findByIdAndDelete(id)
  }
}
