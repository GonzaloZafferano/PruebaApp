import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up-window',
  templateUrl: './pop-up-window.component.html',
  styleUrls: ['./pop-up-window.component.scss'],
  standalone : true, 
  imports: [
    IonicModule, 
    FormsModule, 
    CommonModule]
})
export class PopUpWindowComponent  implements OnInit {

  
  constructor() { }
  ngOnInit() {}

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
}

