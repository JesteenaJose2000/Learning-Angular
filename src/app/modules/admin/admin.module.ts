import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LazyAdminComponent } from './components/lazy-admin/lazy-admin.component';
import { LazyAdminLoginComponent } from './components/lazy-admin-login/lazy-admin-login.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminAboutComponent } from './components/admin-about/admin-about.component';
import { AdminContactComponent } from './components/admin-contact/admin-contact.component';


@NgModule({
  declarations: [
    LazyAdminComponent,
    LazyAdminLoginComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminAboutComponent,
    AdminContactComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
