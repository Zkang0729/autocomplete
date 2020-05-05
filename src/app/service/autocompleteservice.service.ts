import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AutoCompleteService {
  constructor(private httpClient: HttpClient) {}

  readonly searchURL: string = 'https://api.github.com/search/users?q=';

  // Get Search Results
  public getResults(keyword: string): Observable<any> {
    return this.httpClient.get<any>(`${this.searchURL}${keyword}`);
  }
}
