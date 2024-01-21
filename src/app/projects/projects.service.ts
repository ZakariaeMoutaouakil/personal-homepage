import { Injectable } from '@angular/core';
import {Project} from "./project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects : Project[] = [
    {
      id:0,
      image:"https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg",
      titre:"Full Stack Web Application (Part 1/2)",
      tags:["Angular","Django","Typescript","Firebase","Neo4j"],
      description:"An angular web application with a django rest api backend and a graph database (Neo4j).",
      icon: "school",
      code:"https://github.com/ZakariaeMoutaouakil/moodle",
      gradio:"https://moodle32515.web.app/"
    },
    {
      id:1,
      image:"https://static.vecteezy.com/system/resources/previews/022/217/833/non_2x/editable-icon-of-database-illustration-isolated-on-white-background-using-for-presentation-website-or-mobile-app-free-vector.jpg",
      titre:"Full Stack Web Application (Part 2/2)",
      tags:["Angular","Django","Typescript","Firebase","Neo4j"],
      description:"An angular web application with a django rest api backend and a graph database (Neo4j).",
      icon: "storage",
      code:"https://github.com/ZakariaeMoutaouakil/backend",
      gradio:""
    },
  ];

  constructor() { }
}
