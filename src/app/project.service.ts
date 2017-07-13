import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getTopProjects() {
    return this.database.list('/projects', {
      query: {
        orderByChild: 'supporters',
        limitToLast: 4,
      }
    });

    // topProjects.subscribe(data => console.log(data));
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

  getTierById(projectId: string, tierId: string){
    return this.database.object('projects/' + projectId + '/tiers/' + tierId);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
                                manager: localUpdatedProject.manager,
                                description: localUpdatedProject.description,
                                goal: localUpdatedProject.goal,
                                plan: localUpdatedProject.plan,
                                tiers: localUpdatedProject.tiers,
                                type: localUpdatedProject.type,
                                tag: localUpdatedProject.tag
                              });
  }

  sellTier(localSoldProject, tierToSellKey, tierCost: number) {
    var projectEntryInFirebase = this.getProjectById(localSoldProject.$key);
    var supporters = parseFloat(localSoldProject.supporters) + 1;
    var moneyRaised = parseFloat(localSoldProject.amountRaised) + tierCost;
    let tierLimit;
    this.getTierById(localSoldProject.$key, tierToSellKey).subscribe(data => {
      tierLimit = data.limit;
      if(tierLimit > 0) {
        tierLimit -= 1;
      }
    })
    this.getTierById(localSoldProject.$key, tierToSellKey).update({limit: tierLimit});
    projectEntryInFirebase.update({supporters: supporters,
                                  amountRaised: moneyRaised
                              });

  }

  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

  getProjectTiers(projectId: string) {
    return this.database.list(`projects/${projectId}/tiers`);
  }

}
