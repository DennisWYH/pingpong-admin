import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-display-sentence',
  templateUrl: './display-sentence.component.html',
  styleUrls: ['./display-sentence.component.css']
})
export class DisplaySentenceComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getSentenceData()
    .subscribe();
    console.log(this.dataService.getSentenceData());
  }
}
