import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
import { ProcessComponent } from './process/process.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DonateComponent,
    MissionComponent,
    TeamComponent,
    InitiativesComponent,
    SupportComponent,
    CpuComponent,
    CloudComponent,
    PowerComponent,
    VolunteerComponent,
    ProcessComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
