import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { JoinProjectDto } from './dto/join-collaborator.dto';
import { RelationsService } from './relations.service';

@ApiTags('Relations')
@Controller('relations')
export class RelationsController {
  constructor(private readonly relationsService: RelationsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post(':collaboratorId/:projectName/join')
  public async joinProject(@Param('collaboratorId') collaboratorId: string, @Param('projectName') projectName: string, @Body() login: JoinProjectDto) {
    return this.relationsService.joinProject(collaboratorId, projectName, login)
  }
}


