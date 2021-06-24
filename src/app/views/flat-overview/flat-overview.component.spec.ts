import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatOverviewComponent } from './flat-overview.component';

describe('FlatOverviewComponent', () => {
  let component: FlatOverviewComponent;
  let fixture: ComponentFixture<FlatOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
