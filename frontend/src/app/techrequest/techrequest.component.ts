import { Component, OnInit } from '@angular/core';

import { TechRequest } from '../tech-request';

@Component({
  selector: 'app-techrequest',
  templateUrl: './techrequest.component.html',
  styleUrls: ['./techrequest.component.css']
})
export class TechrequestComponent {

  orgTypes = ['church', 'school', 'non-profit'];
  verbs = ['helping', 'coaching', 'encouraging', 'supporting', 'providing', 'teaching'];
  demographics = ['young adults', 'unemployed individuals', 'homeless families', 'low-income households', 'single mothers', 'single fathers', 'senior citizens', 'developmentally challenged'];
  verbTwos = ['serve', 'support', 'prepare', 'teach', 'help'];
  numbers = ['dozens', 'hundreds', 'thousands', 'tens of thousands'];
  pluralDemographics = ['people', 'individuals', 'adults', 'families', 'children'];

  groups = ['Low-income', 'Workforce readiness', 'Education', 'Faith', 'Veteran services', 'Homelessness', 'Inclusion', 'Accessibility', 'Women specifically/only', 'Men specifically/only', 'Children specifically/only'];
  skills = ['Job coaching', 'Workforce development/skill building', 'Recreation activities', 'Social skill building', 'Education', 'Training', 'Accessibility'];

  model = new TechRequest('The Shore Foundation', 
    'refurbished laptops and desktops', 'western NY', 
    2018, "non-profit", 'provides', 'low-income households', 
    'gain access to technology', 'help', 'hundreds', 'families', 'gain access to technology');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
