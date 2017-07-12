import { Tier } from './tier.model';
import { Supporter } from './supporter.model';

export class Project {
  constructor (public name: string, public manager: string, public description: string, public goal: number, public plan: string, public tiers: Tier[], public supporters: Supporter[], public type: string, public tag: string) { }
}
