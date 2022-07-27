import { Component, OnInit } from '@angular/core'; 
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MensagemService } from 'src/app/services/MensagemService';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'spa-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  mesage: string[] = []

  constructor(
    private mensagemService: MensagemService,
    private _bottomSheetRef: MatBottomSheetRef<FooterComponent>) {}

  ngOnInit(): void {
    this.mesage = this.mensagemService.mensage
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
  