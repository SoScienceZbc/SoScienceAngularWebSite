import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { expandingD_Project } from '../archive/archive.component';
import { DatabaseService } from '../database.service';
import { D_Projects, D_ProjectTheme } from '../protos/DatabaseProto_pb';
import { LoadingService } from '../loading.service';

interface Language {
  value: string | any;
  viewValue: string;
}

@Component({
  selector:'app-options',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*'})),
      transition('expanded <=> collapsed, void => expanded', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SettingsComponent implements OnInit {

  public dataSource: Array<D_ProjectTheme> = new Array<D_ProjectTheme>();

  loading$ = this.spinner.loading$;
  
  displayedColumns = ["name", "endDate"];

  @ViewChild("mattable", { read: MatSort }) sort!: MatSort;

  matdatasource = new MatTableDataSource<D_ProjectTheme>(this.dataSource);

  projectThemes: Array<D_ProjectTheme> = new Array<D_ProjectTheme>();

  Projects = new D_Projects();
  
  constructor(database: DatabaseService, private spinner:LoadingService) 
  {
    database.listOfProjectThemes$.subscribe(projectThemes =>{
      console.log("Got project Themes");
      this.projectThemes = projectThemes;
      this.matdatasource.data = [];
      this.projectThemes.forEach(projectTheme => {
        this.matdatasource.data.push(projectTheme);
        this.matdatasource._updateChangeSubscription();
      })
      this.spinner.hide();
    });
    database.GetProjectTheme();
    let d = new D_ProjectTheme();
  }

  public languages: Language[] = [
    {value: 'danish', viewValue: 'Dansk'},
    {value: 'english', viewValue: 'Engelsk'}
  ];
  ngOnInit(): void {
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.matdatasource.filter = filterValue.trim().toLowerCase();
  // }

  onsortChange() {
    this.matdatasource.sortingDataAccessor = (item, property) => {
      let switchValue = ""
      switch (property) {
        case 'name': switchValue = item.getName(); break;
        case 'Id': switchValue = item.getId().toString(); break;
        case 'lastedited': switchValue = item.getLastedited(); break;
        case 'endDate': switchValue = item.getEnddate(); break;
      }
      return switchValue;
    };
}
}
