import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-digipop';
import { EditorConfig } from './editor-config.const';

@Component({
  selector: 'app-home',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
  public Editor = DecoupledEditor;
  public config = EditorConfig;
  public content = '';
  public title = 'Osnovna škola blđđšžčćč';
  private replaceStringRegex = /[čćđžšČĆĐŽŠ]/g;
  private replaceStrings = {
    č: 'c',
    ć: 'c',
    đ: 'd',
    ž: 'z',
    š: 's',
    Č: 'C',
    Ć: 'C',
    Đ: 'D',
    Ž: 'Z',
    Š: 'S'
  };

  constructor() {}

  ngOnInit() {}

  public onReady(editor: any) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
  }

  public onSubmit(): void {
    const nameArray = this.title.split(' ');
    let fileName = '';
    for (let i = 0; i < nameArray.length; i++) {
      if (i !== 0) {
        fileName += '-';
      }
      fileName += this.sanitizeFileName(nameArray[i]);
    }
    this.download(fileName, this.content);
  }

  private download(filename: string, text: string): void {
    const downloadElement = document.createElement('a');
    downloadElement.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    downloadElement.setAttribute('download', filename);

    if (document.createEvent) {
      const event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      downloadElement.dispatchEvent(event);
    } else {
      downloadElement.click();
    }
  }
  private sanitizeFileName(s: string) {
    const string = s.replace(this.replaceStringRegex, (match: string) => {
      return this.replaceStrings[match];
    });
    return string.toLowerCase();
  }
}
