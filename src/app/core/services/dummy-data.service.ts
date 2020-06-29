import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor() { }

  getData = () => ( axios.create({
    headers: {
      common: {
        Authorization: `JWT ${localStorage.token}`,
      }
    }
  }));

  get = (baseUrl) => this.getData().get(baseUrl);
}
