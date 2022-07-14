import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(

    private _snackBar: MatSnackBar

  ) { }

  notificar(messagem: string) {
    this._snackBar.open(messagem, "Ok", 
    {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    }
    );
  }

}
