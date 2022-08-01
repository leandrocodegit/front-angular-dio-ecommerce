import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { SheetComponent } from "../components/view/sheet/sheet.component";


@Injectable({
    providedIn: 'root'
})
export class MensagemService {

    constructor(private _bottomSheet: MatBottomSheet) { }

    mensage: string[] = []

    sendMesage(msg: string[], isView: boolean) {
        this.mensage = msg


        if (isView) {
            this._bottomSheet.open(SheetComponent)
            var interval = setInterval(() => {
                this._bottomSheet.dismiss(SheetComponent)
                console.log('Interval')
                clearInterval(interval)
            }, 5000)
        }
    }
}