import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs/Observable'
import { GalleryImage } from '../../models/GalleryImage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, OnChanges {
  images: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    // console.log(this.images);
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
    // console.log(this.images);
  }

}
