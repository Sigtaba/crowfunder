import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Tier } from '../tier.model';



@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  tiers: Tier[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjectTiers(this.selectedProject.$key).subscribe(data => this.tiers = data);

    }
    //so this doesn't work in the html...womp womp

  beginUpdatingProject(projectToUpdate){
    this.projectService.updateProject(projectToUpdate);
  }

  beginDeletingProject(projectToDelete){
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.deleteProject(projectToDelete);
    }
  }

}
