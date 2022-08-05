import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  items!: GalleryItem[];

  imageData = data;
  
  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {
    const ref = this.gallery.ref();

    ref.setConfig({
      thumbPosition: ThumbnailsPosition.Top,
    });
    //create gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
  }

}

const data = [
  {
    srcUrl: '/assets/linkImg1.jpg',
    previewUrl: '/assets/linkImg1.jpg'
  },
  {
    srcUrl: '/assets/linkImg2.jpg',
    previewUrl: '/assets/linkImg2.jpg'
  },
  {
    srcUrl: '/assets/linkImg3.jpg',
    previewUrl: '/assets/linkImg3.jpg'
  },


]