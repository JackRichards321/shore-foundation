import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DonateComponent,
    TeamComponent,
    SupportComponent,
    CpuComponent,
    CloudComponent,
    PowerComponent,
    VolunteerComponent,
    ContactComponent,
    TechrequestComponent,
    NewsComponent,
    FaqComponent,
    ImpactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
