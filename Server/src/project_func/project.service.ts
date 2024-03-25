import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = new Project();
    project.title = createProjectDto.title;
    project.description = createProjectDto.description;
    project.isPublic = createProjectDto.isPublic;
    project.category = createProjectDto.category;

    return this.projectRepository.save(project);
  }

  findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  findOne(id: number): Promise<Project> {
  return this.projectRepository.findOne({ where: { id } });

  }

  async update(id: number, updateProjectDto: CreateProjectDto): Promise<Project> {
    const project = await this.projectRepository.findOne({ where: { id } });
    if (!project) {
      throw new Error('Project not found');
    }
    project.title = updateProjectDto.title;
    project.description = updateProjectDto.description;
    project.isPublic = updateProjectDto.isPublic;
    project.category = updateProjectDto.category;

    return this.projectRepository.save(project);
  }

  async remove(id: string): Promise<void> {
    await this.projectRepository.delete(id);
  }
}