import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashInterface {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }


  getfoto() {
    return this.http.get<UnsplashInterface>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID rV2FfLtxDqD-SyPPQpSyu8g4s2IwG3ZbrlvXA63fU_k',
      }
    });
  }
}
