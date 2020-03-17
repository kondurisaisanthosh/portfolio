import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about/about.component';
import { EducationComponent } from './education/education/education.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { PersonalComponent } from './personal/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    PersonalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
