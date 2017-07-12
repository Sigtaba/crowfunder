import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ProjectService]
})

export class HomepageComponent implements OnInit {

  projects;

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getTopProjects();
    console.log(this.projects);
  }


  // goToDetailPage(clickedAlbum) {
  //   // this.router.navigate(['albums', clickedAlbum.$key]);
  // };
}
