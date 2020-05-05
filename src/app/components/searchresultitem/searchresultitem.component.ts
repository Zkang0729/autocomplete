import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchresultitem',
  templateUrl: './searchresultitem.component.html',
  styleUrls: ['./searchresultitem.component.css'],
})
export class SearchresultitemComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
