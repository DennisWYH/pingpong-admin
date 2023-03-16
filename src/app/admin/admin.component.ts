import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit {
  refreshPageCommand = false;
  constructor(
    private elementRef: ElementRef,
  ){}

  
    // Have access to window.document object and set styles
    // https://stackoverflow.com/questions/46670795/how-to-change-whole-page-background-color-in-angular
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = "url(./../../assets/icons/gradient-center-light-red-light-blue.png)";
  }

  addSentenceNotify() {
    this.refreshPageCommand = true;
  }
}

