import { Component, OnInit } from '@angular/core';

interface Language {
  value: string | any;
  viewValue: string;
}

@Component({
  selector:'app-options',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState4 = false;
  panelOpenState5 = false;
  panelOpenState6 = false;

  public languages: Language[] = [
    {value: 'danish', viewValue: 'Dansk'},
    {value: 'english', viewValue: 'Engelsk'}
  ];
  ngOnInit(): void {
  }

}
