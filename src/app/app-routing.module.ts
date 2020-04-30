import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent} from './careers/careers.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {MeetTheTeamComponent} from './meet-the-team/meet-the-team.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'meettheteam', component: MeetTheTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
