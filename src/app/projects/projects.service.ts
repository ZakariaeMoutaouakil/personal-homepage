import { Injectable } from '@angular/core';
import {Project} from "./project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects : Project[] = [
    {
      id:0,
      image:"",
      titre:"Question Answering Model with BERT",
      tags:["Question Answering","NLP"],
      description:"Question Answering Model with BERT"
    }
  ];

  constructor() { }
}
