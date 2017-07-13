import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@ Pipe({
  name: "tagged",
  pure: false
})

export class TaggedPipe implements PipeTransform {

  transform(input: Project[], desiredTag) {
    var output: Project[] = [];

    if(desiredTag === 'animals') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].tag === 'animals') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTag === 'art') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].tag === 'art') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTag === 'health') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].tag === 'health') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTag === 'home') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].tag === 'home') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTag === 'kids') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].tag === 'kids') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTag === 'recreation') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].tag === 'recreation') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTag === 'social') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].tag === 'social') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTag === 'technology') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].tag === 'technology') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTag === 'transportation') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].tag === 'transportation') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
