import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-digipop';
import { EditorConfig } from '../../constants/editor-config.const';
import { UtilsService } from '@app/shared/services/utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-editing',
  templateUrl: './content-editing.component.html',
  styleUrls: ['./content-editing.component.scss']
})
export class ContentEditingComponent implements OnInit {
  public Editor = DecoupledEditor;
  public config = EditorConfig;
  public content = '';
  public title = 'xy-oblast';
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

  constructor(private utilsService: UtilsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.title = param.sectionName;
    });
  }

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
      fileName += this.utilsService.sanitizeFileName(nameArray[i], this.replaceStringRegex, this.replaceStrings);
    }
    this.download(fileName + '.txt', this.content);
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
}
