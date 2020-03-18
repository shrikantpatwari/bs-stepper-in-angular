import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: 'personal-details', component: PersonalDetailsComponent},
  {path: 'contact-details', component: ContactDetailsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '**', component: PersonalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
