import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from '../database.service';
import { D_Document, D_Documents, D_Project } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from '../loading.service';
import { TextEditorComponent } from '../TextEditor/TextEditor.component';
import { DialogAreYouSureComponent } from '../dialog-are-you-sure/dialog-are-you-sure.component';
import { QuilEditorPreViewComponent } from '../quil-editor-pre-view/quil-editor-pre-view.component';
import { isTemplateExpression } from 'typescript';
import { expandingD_Project } from '../archive/archive.component';

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

  public dataSource: Array<expandingD_Project> = new Array<expandingD_Project>();

  displayedColumns = ["Id", "name", "completed", "endDate"];

  @ViewChild("mattable", { read: MatSort }) sort!: MatSort;

  matdatasource = new MatTableDataSource<expandingD_Project>(this.dataSource);




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
