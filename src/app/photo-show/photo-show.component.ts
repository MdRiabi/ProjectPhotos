import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';



@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  constructor(private phservice: PhotosService) {
    this.phservice.getfoto().subscribe((res) => {
      console.log(res.urls.regular);
    })

  }

  ngOnInit(): void {
  }

}
