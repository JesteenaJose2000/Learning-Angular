import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyAdminLoginComponent } from './lazy-admin-login.component';

describe('LazyAdminLoginComponent', () => {
  let component: LazyAdminLoginComponent;
  let fixture: ComponentFixture<LazyAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyAdminLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
