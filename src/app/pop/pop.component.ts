import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent implements OnInit {

  constructor(private dialog:MatDialog){

  }

  ngOnInit(): void {
  }
  closeModel(){
    this.dialog.closeAll();
  }

}
