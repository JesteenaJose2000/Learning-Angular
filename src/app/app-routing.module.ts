import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomAttributeComponent } from './custom-attribute/custom-attribute.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AdminModule } from './modules/admin/admin.module';
import { ForkjoinSampleComponent } from './forkjoin-sample/forkjoin-sample.component';
import { LayoutComponent } from './portfolio/components/layout/layout.component';

const routes: Routes = [
  // { path: '', redirectTo: '/customDirective', pathMatch: 'full' },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: LayoutComponent },
  { path: 'customDirective', component: CustomAttributeComponent },
  { path: 'employee', component: EmployeeDetailComponent },
  { path: 'forkjoin', component: ForkjoinSampleComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => AdminModule), //lazy loading
  },
  { path: '**', component: EmployeeListComponent }, ////doesnt match anything,
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
