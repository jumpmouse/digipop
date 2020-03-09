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

  constructor(
    private utilsService: UtilsService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param);
      this.title = `${param.sectionName}_${param.subsectionName}`;
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
      fileName += this.utilsService.sanitizeFileName(nameArray[i]);
    }
    this.utilsService.downloadDocument(fileName + '.txt', this.content);
  }
}
