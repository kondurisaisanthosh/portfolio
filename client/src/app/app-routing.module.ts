import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { EducationComponent } from './education/education/education.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { PersonalComponent } from './personal/personal/personal.component';


const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'education',component:EducationComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'personal-info',component:PersonalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
