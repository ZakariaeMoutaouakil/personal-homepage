import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes = [
  // {
  //   path:"",
  //   redirectTo: "/home",
  //   pathMatch: "full"
  // },
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"/projects",
    component: ProjectsComponent
  },
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
