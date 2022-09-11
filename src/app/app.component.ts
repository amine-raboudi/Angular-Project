import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';

import { PopComponent } from './pop/pop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private dialog:MatDialog){


 
}


  


  ngOnInit(){

  }
  
  openModel=()=>{
    
    const dialogRef=new MatDialogConfig();
    dialogRef.width='450px';
   
    this.dialog.open(PopComponent,dialogRef)

  }
  openContact(){
    const dialogRef=new MatDialogConfig();
    dialogRef.width='450px';
   
    this.dialog.open(ContactComponent,dialogRef)


  }
}
