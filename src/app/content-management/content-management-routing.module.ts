import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentManagementComponent } from './content-management.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'content-management',
      component: ContentManagementComponent,
      pathMatch: 'full'
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContentManagementRoutingModule {}
