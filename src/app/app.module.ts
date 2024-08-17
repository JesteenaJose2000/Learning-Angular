import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { TitlePipe } from './title.pipe';
import { EmpTitlePipe } from './emp-title.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ProductstoreComponent } from './productstore/productstore.component';
import { CategoryComponent } from './category/category.component';
import { CustomAttributeComponent } from './custom-attribute/custom-attribute.component';
import { HighlightDirective } from './highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { ForkjoinSampleComponent } from './forkjoin-sample/forkjoin-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    TitlePipe,
    EmpTitlePipe,
    EmployeeListComponent,
    EmployeeDetailComponent,
    PostComponent,
    PicturesComponent,
    ProductstoreComponent,
    CategoryComponent,
    CustomAttributeComponent,
    HighlightDirective,
    ForkjoinSampleComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
