import {Component} from '@angular/core';
import {ProjectsService} from "./projects.service";
import {Project} from "./project";
import {ProgressBarService} from "../progress-bar/progress-bar.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projects: Project[];
  constructor(private projectsService:ProjectsService,
              private progressBarService : ProgressBarService) {
    this.projects = this.projectsService.projects;
  }

  startProgressBar($event: MouseEvent) {
    this.progressBarService.clickEvent.next($event);
  }
}
