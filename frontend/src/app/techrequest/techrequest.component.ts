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

  model = new TechRequest("non-profit", 'The Shore Foundation', 'providing', 'refurbished laptops and desktops', 2018, 'help', 'hundreds', 'people', 'Western NY');

  orgType: string = '';

  submitted = false;

  onSubmit() { 
    
    this.submitted = true; 

    console.log("form submitted!");

    console.log('Org. Type: ', this.orgType);

    let dataObj = {
      orgType: this.orgType,
    }

    fetch(`http://localhost:3000` + '/newReq', {
      method: 'POST',
      body: JSON.stringify(dataObj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

}
