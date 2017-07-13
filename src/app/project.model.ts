import { Tier } from './tier.model';

export class Project {
  public supporters: number = 0;
  public amountRaised: number = 0;
  constructor (
    public name: string,
    public manager: string,
    public description: string,
    public goal: number,
    public plan: string,
    public tiers: Tier[],
    public type: string,
    public tag: string
  ) { }
}
