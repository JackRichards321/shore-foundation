import { Component, OnInit } from '@angular/core';

import { TechRequest } from '../tech-request';

@Component({
  selector: 'app-techrequest',
  templateUrl: './techrequest.component.html',
  styleUrls: ['./techrequest.component.css']
})
export class TechrequestComponent {

  orgTypes = ['church', 'school', 'non-profit'];

  model = new TechRequest('The Shore Foundation', 'refurbished laptops and desktops', 'western NY', 2018, "non-profit");

  submitted = false;

  onSubmit() { this.submitted = true; }

}
