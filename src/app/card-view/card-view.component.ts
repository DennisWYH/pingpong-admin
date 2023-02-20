import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements AfterViewInit{
  constructor(
    private elementRef: ElementRef
  ){}
 
  ngAfterViewInit() {
    // Have access to window.document object and set styles
    // https://stackoverflow.com/questions/46670795/how-to-change-whole-page-background-color-in-angular
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = "url(./../../assets/icons/gradient-center-light-red-light-blue.png)";
}
  }
