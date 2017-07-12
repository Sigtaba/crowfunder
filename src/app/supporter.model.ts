import { Project } from './project.model';

export class Supporter {
  constructor (public name: string, public supported: Project[]) { }
}
