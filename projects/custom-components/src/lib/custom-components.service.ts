import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CustomComponentsService {
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
