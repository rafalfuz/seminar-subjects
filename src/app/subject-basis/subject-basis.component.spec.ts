import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBasisComponent } from './subject-basis.component';

describe('SubjectBasisComponent', () => {
  let component: SubjectBasisComponent;
  let fixture: ComponentFixture<SubjectBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectBasisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
