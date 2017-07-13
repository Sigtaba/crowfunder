import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Tier } from '../tier.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent implements OnInit {

  constructor(private router: Router,
    private projectService: ProjectService) { }

  ngOnInit() {

  }
  tierArray = [];

  submitForm(name: string, manager: string, description: string, goal: number, plan: string, tierAmount: number, tierReward: string, tierLimit: number, type: string, tag: string) {
    var newTier: Tier = new Tier(tierAmount, tierReward, tierLimit);
    this.tierArray.push(newTier);
    var newProject: Project = new Project(name, manager, description, goal, plan, this.tierArray, type, tag);
    this.projectService.addProject(newProject);
    this.router.navigate(['marketplace']);
  }

}
