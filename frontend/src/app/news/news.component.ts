import { Component, OnInit } from '@angular/core';

import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  posts = [
    {
      "title": "Guinness World Record",
      "subtitle": "We got one!",
      "content": "We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day We donated like 567 computers in one day ",
      "images": ['/assets/linkImg1.jpg', '/assets/linkImg2.jpg', '/assets/linkImg1.jpg'],
    }, {
      "title": "100 Computers!",
      "subtitle": "We got one hundred laptops!",
      "content": "That's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of lapsThat's a lot of laps",
      "images": ['/assets/linkImg3.jpg', '/assets/linkImg1.jpg', '/assets/linkImg1.jpg'],
    }, {
      "title": "Rochester Schools",
      "subtitle": "We love our communbity",
      "content": "They sent us letters and photos that touches our heartsThey sent us letters and photos that touches our heartsThey sent us letters and photos that touches our heartsThey sent us letters and photos that touches our heartsThey sent us letters and photos that touches our heartsThey sent us letters and photos that touches our heartsThey sent us letters and photos that touches our heartsThey sent us letters and photos that touches our heartsThey sent us letters and photos that touches our heartsThey sent us letters and photos that touches our heartsThey sent us letters and photos that touches our hearts",
      "images": ['/assets/linkImg2.jpg', '/assets/linkImg1.jpg', '/assets/linkImg1.jpg'],
    }, {
      "title": "We are moving!",
      "subtitle": "So long Marway...",
      "content": "The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game ",
      "images": ['/assets/linkImg1.jpg', '/assets/linkImg3.jpg', '/assets/linkImg1.jpg'],
    }, {
      "title": "MARS SKITTLES CANDY BUBBLEGUM",
      "subtitle": "We got one!",
      "content": "We donated like 567 computers in one dayWe donated like 567 computers in one dayWe donated like 567 computers in one dayWe donated like 567 computers in one dayWe donated like 567 computers in one dayWe donated like 567 computers in one dayWe donated like 567 computers in one dayWe donated like 567 computers in one day",
      "images": ['/assets/linkImg1.jpg', '/assets/linkImg1.jpg', '/assets/linkImg1.jpg'],
    },
  ];

  currentPost = {
    "title": "We are moving!",
    "subtitle": "So long Marway...",
    "content": "The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game The Shore is partnering with Goodwill to up our game ",
    
      "images": ['/assets/linkImg1.jpg', '/assets/linkImg1.jpg', '/assets/linkImg1.jpg'],
  };

  updateCurrent(post:News) {
    this.currentPost = {
      "title": post.title,
      "subtitle": post.subtitle,
      "content": post.content,
      "images": post.images,
    }
  }

}
