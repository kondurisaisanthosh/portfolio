import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { EducationComponent } from './education/education/education.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { PersonalComponent } from './personal/personal/personal.component';


const routes: Routes = [
  {path:'about',component:AboutComponent,data:{animation:'About'}},
  {path:'education',component:EducationComponent,data:{animation:'Education'}},
  {path:'experience',component:ExperienceComponent,data:{animation:'Experience'}},
  {path:'skills',component:SkillsComponent,data:{animation:'Skills'}},
  {path:'projects',component:ProjectsComponent,data:{animation:'Projects'}},
  {path:'personal-info',component:PersonalComponent,data:{animation:'PerasonalInfo'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
