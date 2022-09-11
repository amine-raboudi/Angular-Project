import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../contact.service';
import { Personal } from '../personal';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  
})
export class ContactComponent implements OnInit {

  email= new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  public personal:Personal;
    constructor(private dialog:MatDialog,private contactData:ContactService){
    this.personal=new Personal();

  }


  ngOnInit(): void {
    
    
  }
  closeModel(){
    this.dialog.closeAll();
  }
  onSubmit(data:any){
    console.log(data);
    
  }
  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}
  
 

  
}
