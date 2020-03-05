import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-digipop';

@Component({
  selector: 'app-home',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
  public Editor = DecoupledEditor;
  public config = {
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'heading',
        '|',
        'fontSize',
        'fontFamily',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'subscript',
        'superscript',
        '|',
        'highlight',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'numberedList',
        'bulletedList',
        '|',
        'alignment',
        'indent',
        'outdent',
        '|',
        'link',
        'imageUpload',
        'CKFinder',
        'insertTable',
        'mediaEmbed'
      ]
    },
    language: 'sr',
    image: {
      toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side']
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties', 'tableProperties']
    }
  };

  constructor() {}

  ngOnInit() {}

  public onReady(editor: any) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
  }
}
