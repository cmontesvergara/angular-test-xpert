import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http:HttpClient) { }

  getBreeds():Observable<any>{
    let endpoint=`${environment?.endpoints?.breeds}`;
    return this.http.get<any>(endpoint);
  }
  getImageById(id:string):Observable<any>{
    let endpoint=`${environment?.endpoints?.imageById}`.replace('{image_id}',id);
    return this.http.get<any>(endpoint);
  }
  getImages(name:string):Observable<any>{
    let endpoint=`${environment?.endpoints?.images}&limit=10`.replace('{breed_id}',name);
    return this.http.get<any>(endpoint);
  }
}
