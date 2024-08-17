import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinSampleComponent } from './forkjoin-sample.component';

describe('ForkjoinSampleComponent', () => {
  let component: ForkjoinSampleComponent;
  let fixture: ComponentFixture<ForkjoinSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkjoinSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkjoinSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
