import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent  {

  questions = [
    {
      "question": "How do I volunteer?",
      "answer": "Check our volunteer page!",
      "link": "/volunteer",
    },
    {
      "question": "Do you take donations from anybody?",
      "answer": "Check out our in-kind support page for more information!",
      "link": "/inkind",
    },
    {
      "question": "How do I donate?",
      "answer": "Check out our donate page!",
      "link": "/donate",
    },
    {
      "question": "Can I get equipment from The Shore Foundation?",
      "answer": "Yes! Please contact us first, then we will take you through the easy steps.",
      "link": "/contact",
    },
  ]
  
}
