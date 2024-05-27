import { Injectable } from '@angular/core';
import { StorageKeys } from '../../core/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  keys: StorageKeys = {
    detailCatData: 'catData',
  };
  constructor() {}

  save(key: string, data: object) {
    return sessionStorage.setItem(key, JSON.stringify(data));
  }
  read(key: string, deleteAfterRead = false) {
    let dataUnParsed = sessionStorage.getItem(key) || '';
    let data = dataUnParsed ? JSON.parse(dataUnParsed) : {};
    if (deleteAfterRead) sessionStorage.removeItem(key);
    return data;
  }
  saveCatData(data: object) {
    return sessionStorage.setItem(
      this.keys.detailCatData,
      JSON.stringify(data)
    );
  }
  readCatData(deleteAfterRead = false) {
    let dataUnParsed = sessionStorage.getItem(this.keys.detailCatData) || '';
    let data = dataUnParsed ? JSON.parse(dataUnParsed) : {};
    if (deleteAfterRead) sessionStorage.removeItem(this.keys.detailCatData);
    return data;
  }
}
