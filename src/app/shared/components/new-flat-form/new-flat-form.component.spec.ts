import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlatFormComponent } from './new-flat-form.component';

describe('NewFlatFormComponent', () => {
  let component: NewFlatFormComponent;
  let fixture: ComponentFixture<NewFlatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFlatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFlatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
