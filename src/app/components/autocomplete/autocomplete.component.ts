import { Component, OnInit } from '@angular/core';
import { AutoCompleteService } from '../../service/autocompleteservice.service';
import { Subject, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  filter,
} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  public results$: Observable<any[]>;
  public keyword$: Subject<string> = new Subject<string>();

  constructor(private autoCompleteService: AutoCompleteService) {}

  ngOnInit(): void {
    this.keywordProcessing();
  }

  public changeKeyword(value: string): void {
    this.keyword$.next(value);
  }

  public keywordProcessing(): void {
    this.results$ = this.keyword$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((keyword) => keyword.length >= 2),
      switchMap((keyword) => {
        return this.autoCompleteService.getResults(keyword);
      }),
      map((results) => results.items)
    );
  }
}
