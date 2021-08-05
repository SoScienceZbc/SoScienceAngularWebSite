import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Quill from 'quill';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from '../database.service';
import { D_Document } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from '../loading.service';
import * as quillToWord from 'quill-to-word';
import { saveAs } from 'file-saver';
import { pdfExporter } from 'quill-to-pdf';

@Component({
  selector: 'app-quil-editor-pre-view',
  templateUrl: './quil-editor-pre-view.component.html',
  styleUrls: ['./quil-editor-pre-view.component.css'],
})
export class QuilEditorPreViewComponent implements OnInit {
  @ViewChild('editor') editor!: Quill;

  localDDocoment$: BehaviorSubject<D_Document> =
    new BehaviorSubject<D_Document>(new D_Document());
  localDDocoment: D_Document = this.localDDocoment$.value;
  localHtmltext: BehaviorSubject<string> = new BehaviorSubject<string>('');
  spinner: LoadingService = new LoadingService();
  loadingText$ = this.spinner.loading$;
  title: string | any;
  quillDelta = (this.editor.getContents() as any)

  public QuilData = {
    editorData: '',
    Title: '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private datasevice: DatabaseService,
    private dialog: MatDialog
  ) {
    this.localDDocoment$ = this.datasevice.GetDocomentHtml(
      sessionStorage.getItem('username') as string,
      (this.data.docoment as D_Document).getId()
    );
    this.datasevice.EditorDocoment$.subscribe((x) => {
      if (this.QuilData.editorData != x.getData()) {
        this.QuilData.Title = x.getTitle();
        this.QuilData.editorData = x.getData();
      }
      this.spinner.hide();
    });

    this.spinner.show();
  }


  ngOnInit(): void {}

  async SaveAsWordFile() {

    const data = await quillToWord.generateWord(this.quillDelta, {
      exportAs: 'blob',
    });
    saveAs(data as any,'word-export.docx');
  }

  async PrintPdfFile(){

    const data = await pdfExporter.generatePdf(this.quillDelta);
    saveAs(data as any,'pdf-export.pdf');
  }
}



