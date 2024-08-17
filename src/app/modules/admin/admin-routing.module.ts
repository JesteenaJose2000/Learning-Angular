import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyAdminComponent } from './components/lazy-admin/lazy-admin.component';
import { LazyAdminLoginComponent } from './components/lazy-admin-login/lazy-admin-login.component';
import { AdminAboutComponent } from './components/admin-about/admin-about.component';
import { AdminContactComponent } from './components/admin-contact/admin-contact.component';

const routes: Routes = [
  {
    path: '',
    component: LazyAdminComponent,
    children: [
      { path: 'about', component: AdminAboutComponent },
      { path: 'contact', component: AdminContactComponent },
    ],
  },
  { path: 'login', component: LazyAdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
