import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
    const topProjects = firebase.database().ref('projects/').orderByChild('supporters');
    return topProjects.limitToLast(4);
    // return this.database.list(`projects/`);
  }

  // addAlbum(newAlbum: Album) {
  //   this.albums.push(newAlbum);
  // }
  //
  // getAlbumById(albumId: string){
  //   return this.database.object('albums/' + albumId);
  // }
}
