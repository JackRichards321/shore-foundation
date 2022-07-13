import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: 'lightgray',
      typeSpeed: 60,
      cursorColor: 'lightgray',
    })
    
    writer
      .rest(1500)
      .type('Bridging the digital divide and improving lives through access to technology.')
      .rest(500)
      .start()
            
  }

}
