import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(createProjectDto: CreateProjectDto): Promise<import("./project.entity").Project>;
    findAll(): Promise<import("./project.entity").Project[]>;
    findOne(id: number): Promise<import("./project.entity").Project>;
    update(id: number, updateProjectDto: CreateProjectDto): Promise<import("./project.entity").Project>;
    remove(id: string): Promise<void>;
}
