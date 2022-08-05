import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { TeamComponent } from './team/team.component';
import { SupportComponent } from './support/support.component';
import { CpuComponent } from './cpu/cpu.component';
import { CloudComponent } from './cloud/cloud.component';
import { PowerComponent } from './power/power.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ContactComponent } from './contact/contact.component';
import { TechrequestComponent } from './techrequest/techrequest.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';
import { ImpactComponent } from './impact/impact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
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
  { path: 'impact', component: ImpactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
