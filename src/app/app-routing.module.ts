import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ProjectComponent} from "./projects/project/project.component";

const routes = [
  {
    path:"",
    redirectTo: "/home",
    pathMatch:  'full' as "full" | "prefix"
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"projects",
    component: ProjectsComponent
  },
    {
      path:"projects/:id",
      component: ProjectComponent
    }
  ,
  {
    path:"**",
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers:[

  ]
})

export class AppRoutingModule{

}
