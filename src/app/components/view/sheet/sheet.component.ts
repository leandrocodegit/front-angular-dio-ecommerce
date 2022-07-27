import { Component, OnInit } from '@angular/core'; 
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'spa-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<FooterComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
  