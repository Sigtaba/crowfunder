import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Tier } from '../tier.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  projectToSellTier;
  tiers: Tier[];

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);

    this.projectToDisplay.subscribe(data => {
      this.tiers = data.tiers;
      this.projectToSellTier = data;
      // data.tiers.forEach(tier => {
      //
      // })
    });
    console.log(this.projectToDisplay);
  }

  beginSellingTier(projectToSell, tierPledge){
    this.projectService.sellTier(projectToSell, parseFloat(tierPledge));
  }
}
