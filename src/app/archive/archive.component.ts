import { Component, Injectable, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { D_Project, D_Projects } from '../generated/DataBaseProto/DatabaseProto_pb';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  displayedColumns = ["Id", "Name"];
  public dataSource: Array<D_Project.AsObject> = new Array<D_Project.AsObject>();

  constructor(private dataserve: DatabaseService) {
    this.dataserve.GetProjectsAsArray("alex303a");
    this.dataserve.simpleProjectArray$?.subscribe((x) => {
      if (x != this.dataSource) {
        console.log("Argh!!")
        this.dataSource = x;
      }
    })
  }
  unsubscripe() {
    this.dataserve.simpleProjectArray$?.unsubscribe();
  }
  ngOnInit() {
    // this.dataserve.GetProjects("alex303a");
  }
}
