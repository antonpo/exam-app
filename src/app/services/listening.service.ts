import { Injectable } from '@angular/core';
import { ListeningItemModel } from '../models/listening-item.model';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ListeningService {

  constructor(private http: Http) {
  }

  public getAllListenings(): Promise<ListeningItemModel[]> {
    return this.http.get('https://next.json-generator.com/api/json/get/Vy6N8Gqvr')
    .toPromise()
    .then(response => response.json() as ListeningItemModel[]);
  }
}

