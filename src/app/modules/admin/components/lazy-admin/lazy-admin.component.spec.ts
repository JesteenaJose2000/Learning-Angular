import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyAdminComponent } from './lazy-admin.component';

describe('LazyAdminComponent', () => {
  let component: LazyAdminComponent;
  let fixture: ComponentFixture<LazyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
