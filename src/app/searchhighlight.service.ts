import { Injectable } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchhighlightService {

  searchedWord = new Subject();

  constructor() { }

  searchedWordObservable() {
    return this.searchedWord.asObservable();
  }
}
