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
  tiers;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);

    this.projectToDisplay.subscribe(data => {
      this.projectToSellTier = data;
      // console.log(data.tiers)
      this.projectService.getProjectTiers(this.projectToSellTier.$key).subscribe(data => this.tiers = data
      );
      // for (var i = 0; i < this.tiers.length; i++) {
      //   if (this.tiers[i].limit == 0) {
      //     return "No more available!"
      //   };
      // }
    });
  }

  beginSellingTier(projectToSell, tierKey, tierPledge){
    this.projectService.sellTier(projectToSell, tierKey, parseFloat(tierPledge));
  }
}
