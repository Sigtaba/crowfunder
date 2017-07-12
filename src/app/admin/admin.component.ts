import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Tier } from '../tier.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

  }

  submitForm(name: string, manager: string, description: string, goal: number, plan: string, tiers: Tier[], type: string, tag: string) {
    var newProject: Project = new Project(name, manager, description, goal, plan, tiers, type, tag);
    this.projectService.addProject(newProject);
  }

}
