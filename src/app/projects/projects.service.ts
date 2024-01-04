import { Injectable } from '@angular/core';
import {Project} from "./project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects : Project[] = [
    {
      id:0,
      image:"https://img.freepik.com/premium-vector/cute-cat-dog-flat-design-illustration_723554-122.jpg",
      titre:"Animals Classification",
      tags:["Keras","Computer Vision"],
      description:"Fine-tuning the XCeption Model using Keras and Data augmentation to classify animals.",
      icon: "compare",
      code:"",
      gradio:"https://demomodels-demomodels-bert-finetuned-squad.hf.space"
    },
    {
      id:1,
      image:"https://static.vecteezy.com/ti/vecteur-libre/p1/7225199-robot-vecteur-chat-bot-concept-illustration-vectoriel.jpg",
      titre:"Question Answering",
      tags:["PyTorch","NLP"],
      description:"Question Answering Model based on BERT.",
      icon: "compare",
      code:"https://github.com/ZakariaeMoutaouakil/ZakariaeMoutaouakil.github.io",
      gradio:"https://demomodels-demomodels-bert-finetuned-squad.hf.space"
    }
  ];

  constructor() { }
}
