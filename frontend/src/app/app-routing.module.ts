import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { MissionComponent } from './mission/mission.component';
import { TeamComponent } from './team/team.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { SupportComponent } from './support/support.component';
import { CpuComponent } from './cpu/cpu.component';
import { CloudComponent } from './cloud/cloud.component';
import { PowerComponent } from './power/power.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ContactComponent } from './contact/contact.component';
import { ReusingComponent } from './reusing/reusing.component';
import { RecyclingComponent } from './recycling/recycling.component';
import { ConnectingComponent } from './connecting/connecting.component';
import { TechrequestComponent } from './techrequest/techrequest.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'team', component: TeamComponent },
  { path: 'initiatives', component: InitiativesComponent },
  { path: 'reusing', component: ReusingComponent },
  { path: 'recycling', component: RecyclingComponent },
  { path: 'connecting', component: ConnectingComponent },
  { path: 'techrequest', component: TechrequestComponent },
  { path: 'support', component: SupportComponent },
  { path: 'cpu', component: CpuComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'power', component: PowerComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'donate', component: DonateComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
