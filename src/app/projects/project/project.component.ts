import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../projects.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit{
  url : string;
  trustedUrl : SafeResourceUrl;
  constructor(private projectsService:ProjectsService,
              private activatedRoute:ActivatedRoute,
              private domSanitizer:DomSanitizer) {
  }
    ngOnInit(): void {
    this.url=this.projectsService.projects[+this.activatedRoute.snapshot.params['id']].gradio;
    this.trustedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
