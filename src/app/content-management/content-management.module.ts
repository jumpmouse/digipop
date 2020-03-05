import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ContentManagementComponent } from './content-management.component';
import { ContentManagementRoutingModule } from './content-management-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, ContentManagementRoutingModule, CKEditorModule],
  declarations: [ContentManagementComponent]
})
export class ContentManagementModule {}
