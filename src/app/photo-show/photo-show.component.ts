import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';



@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string;

  constructor(private phservice: PhotosService) {
    this.fetchPoto();
  }

  fetchPoto() {
    this.phservice.getfoto().subscribe((res) => {
      this.photoUrl = res.urls.regular;
    })
  }

  onClick() {
    this.fetchPoto();
  }

  ngOnInit(): void {
  }

  

}
