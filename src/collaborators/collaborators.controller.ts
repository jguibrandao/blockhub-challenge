import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { CollaboratorsService } from './collaborators.service';
import { CreateCollaboratorDto } from './dto/create-collaborator.dto';
import { UpdateCollaboratorDto } from './dto/update-collaborator.dto';

@ApiTags('Collaborators')
@Controller('collaborators')
export class CollaboratorsController {
  constructor(private readonly collaboratorsService: CollaboratorsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  public async create(@Body() createCollaboratorDto: CreateCollaboratorDto) {
    return this.collaboratorsService.createCollaborator(createCollaboratorDto);
  }

  @Get()
  public async findAll() {
    return this.collaboratorsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.collaboratorsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateCollaboratorDto: UpdateCollaboratorDto) {
    return this.collaboratorsService.update(id, updateCollaboratorDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.collaboratorsService.remove(id);
  }
}
